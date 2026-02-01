<script setup>
import { reactive, computed, ref } from "vue";
import sendMessage from "../utils/sendEmail.js";

const form = reactive({
    fullName: '',
    email: '',
    contact: '',
    message: '',
});

const toastInfo = ref(null);
const formSubmitStatus = ref("initial");


const clearForm = ()=> {
  form.fullName = '';
  form.email = '';
  form.contact = '';
  form.message = '';
}

const onSubmit = async() => {
      formSubmitStatus.value = "loading";
      try{
        const { fullName, email, contact, message } = form
        await sendMessage(fullName, email, contact, message);
        formSubmitStatus.value = "success"
        setTimeout(()=> {
          clearForm();
        }, 2000)
      }
      catch(err) {
        formSubmitStatus.value = "error"
      }
      finally {
        setTimeout(()=> formSubmitStatus.value ="initial", 2000)
      }
}

const sumbitButtonInfo = computed(()=> {
  if (formSubmitStatus.value == "loading") return "Loading ...";
  if (formSubmitStatus.value == "success") return "Success";
  if (formSubmitStatus.vlaue == "error") return "Failed"
  return "Submit"
})

const handleInput = (event)=> {
    form.contact = event.target.value.replace(/\D/g, "").slice(0, 10)
}
</script>

<template>
    <form class="flex flex-col gap-4 pt-12" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
            <label class="sm:text-lg text-brand-dark font-semibold">
                 Full name
            </label>
            <input 
              class="border border-blue-500 rounded-sm text-lg px-4 py-2 min-w-[25rem]" 
              type="text"
              required
              placeholder="Enter full name"
              v-model="form.fullName" 
            />
        </div>
        <div class="flex flex-col gap-2">
            <label class="sm:text-lg text-brand-dark font-semibold flex items-start">
               Email
            </label>
            <input 
             class="border border-blue-500 rounded-sm text-lg px-4 py-2" 
             type="email"
             placeholder="Enter email"
             v-model="form.email"
             required
            />
        </div>
        <div class="flex flex-col gap-2">
            <label class="sm:text-lg text-brand-dark font-semibold">
                Contact Number
            </label>
            <input 
             class="border border-blue-500 rounded-sm text-lg px-4 py-2" 
             type="tel"
             v-model="form.contact"
             required
             maxlength="10"
             placeholder="Enter contact number"
             @input="handleInput"
            />
        </div>
        <div class="flex flex-col gap-2">
            <label class="sm:text-lg text-brand-dark font-semibold">
                Message 
            </label>
            <textarea 
              class="border border-blue-500 rounded-sm text-lg px-4 py-2" 
              rows="5" 
              v-model="form.message"
              maxlength="500"
              placeholder="Enter a message (max. 500 characters)"
              required
            />
        </div>
        <button type="submit" 
        :disabled="formSubmitStatus != 'initial'"
        class="bg-blue-500 py-4 rounded-md cursor-pointer text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        :class="[
            {'bg-green-500' : formSubmitStatus == 'success'},
            {'bg-red-400' : fromSubmitStatus == 'error'}
         ]"
        >
         {{ sumbitButtonInfo }}
        </button>
    </form>
</template>

<style scoped>

</style>
