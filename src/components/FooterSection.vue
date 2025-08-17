<script setup>
const contact = [
{
  type: "email",
  value: "sbbadvisorysolutions@gmail.com"
},

{
  type: "phone",
  value: "(+977) 9702012445/9702012446/9702012447"
},

{
  type: "location",
  value: "New-Baneshwor, Kathmandu"
}

]






</script>

<template>
    <section aria-label="footer" aria-role="footer" class="bg-brand-dark pt-6 pb-2">
     <div class="w-full flex justify-center text-light-gold">
            <div class="w-full flex gap-6 justify-center items-center">
                <span v-for="item in contact" :key="item.type">
                    {{ item.value }}
                </span>
            </div>
        </div>
        <hr class= "w-2/3 h-0.5 mx-auto my-3 bg-gray-100"/>
        <p class="text-light-gold text-lg text-center mt-2">&copy; SBB ADVISORY SOLUTIONS</p>
    </section>
</template>
