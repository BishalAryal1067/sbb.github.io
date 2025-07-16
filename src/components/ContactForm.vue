<script setup>
import { reactive, computed } from "vue";

const form = reactive({
    fullName: '',
    email: '',
    contact: '',
    message: '',
});

const errorObj = (alias) => {
    return {
        error: true,
        message: `${alias} is required`
    }
}

const isFormValid = computed(() => {
    if (!form.fullName) return errorObj("Fulll Name");
    else if (!form.email && !form.contact) return errorObj("Email or contact");
    else if (!form.message) return errorObj("Message");
    else return true;
})

const onSubmit = () => {
    if (isFormValid.value) {


    }
}
</script>

<template>
    <form class="flex flex-col gap-4 pt-12" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
            <label class="sm:text-lg text-brand-dark font-semibold">Full name</label>
            <input class="border border-brand-yellow rounded-sm text-lg px-4 py-2 min-w-[25rem]" type="text"
                v-model="form.fullName" />
        </div>
        <div class="flex flex-col">
            <label class="sm:text-lg text-brand-dark font-semibold">Email</label>
            <input class="border border-brand-yellow rounded-sm text-lg px-4 py-2" type="text" v-model="form.email" />
        </div>
        <div class="flex flex-col">
            <label class="sm:text-lg text-brand-dark font-semibold">Contact Number</label>
            <input class="border border-brand-yellow rounded-sm text-lg px-4 py-2" type="text" v-model="form.contact" />
        </div>
        <div class="flex flex-col">
            <label class="sm:text-lg text-brand-dark font-semibold">Message</label>
            <textarea class="border border-brand-yellow rounded-sm text-lg px-4 py-2" rows="5" v-model="form.message" />
        </div>
        <div
            class="bg-brand-yellow rounded-sm w-fit px-8 py-2 cursor-pointer sm:px-12 sm:py-4 text-white sm:text-lg font-semibold">
            <input type="submit" value="Submit" />
        </div>
    </form>

</template>
