// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the file input and send button elements
    const fileInput = document.getElementById('fileInput');
    const sendButton = document.getElementById('sendButton');

    // Add an event listener to the send button
    sendButton.addEventListener('click', async function () {

        // Retrieve the selected file
        const file = fileInput.files[0];

        // Check if a file is selected
        if (!file) {
            console.error('No file selected.');
            return;
        }

        // Create a new FormData object to hold the file and message content
        const formData = new FormData();
        formData.append('file', file);
        formData.append('content', 'Hello from Discord Webhooks!');

        try {
            // Define the Discord webhook URL
            const webhookUrl = 'https://discord.com/api/webhooks/1251215293649387572/gNr7b_U6S5xE8sps4dcGGWBXYeShg5Xv2FxguJ4FOfeJdi54fnXGkN3jgeekRNaik0Ej';

            // Send a POST request to the webhook URL with the file and message content
            const response = await fetch(webhookUrl, {
                method: 'POST',
                body: formData
            });

            // Check if the request was successful
            if (response.ok) {
                // Parse the response JSON
                const responseData = await response.json();

                // Log success message and attachment URL
                console.log('Message sent successfully.');
                console.log('Message Content:', responseData.content);
                console.log('Attachment URL:', responseData.attachments[0].url);
            } else {
                // Log error message if the request failed
                console.error('Failed to send message.');
            }
        } catch (error) {
            // Log any errors that occur during the sending process
            console.error('Error sending message:', error);
        }

       
    });
});