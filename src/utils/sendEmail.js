const sendMessage = async (name, email, contact, message) => {
    const data = {
        service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAIL_USER_ID,
        template_params: {
            name,
            email,
            contact,
            message
        }
    }
    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send'
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) return true;
    }
    catch (err) {
        console.error(err)
    }

}

export default sendMessage;
