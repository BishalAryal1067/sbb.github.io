<script setup>
import { computed } from "vue";

const props = defineProps({
    error: {
        type: Boolean
    },
    success: {
        type: Boolean
    },
    message: {
        type: String,
        default: "Something went wrong"
    }

})

</script>

<template>
    <div class="max-w-fit bg-red-500">
    </div>
</template>
