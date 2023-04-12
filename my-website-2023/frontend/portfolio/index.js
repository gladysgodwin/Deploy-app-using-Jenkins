document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact');
  form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
      name: name,
      email: email,
      message: message,
  };

  try {
      const response = await sendDataToBackend(data);
      console.log(response, 'response')
      if (response.ok) {
          // Handle success, e.g., show the alert message
          const responseData = await response.json()
         window.alert(responseData.message)
      } else {
          // Handle error, e.g., show an error message

      }
  } catch (error) {
      // Handle network error, e.g., show an error message
  }
}


async function sendDataToBackend(data) {
  const url = process.env.SERVER_URL || "http://portfolio_backend:3000/submit-data";

  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  return response;
}


