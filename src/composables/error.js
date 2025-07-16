import { ref } from "vue";

const errorMessage = ref("");

const useError = () => {
    const setError = (message) => {
        errorMessage.value = message;
    }
}

export {
    errorMessage,
    useError,
};



