const fetch = require('node-fetch');

const API_KEY = 'airclass_default_secret';
// const airclass_URL = "http://localhost:3000/api/v1/meeting";
// const airclass_URL = "https://airclass.herokuapp.com/api/v1/meeting";
const airclass_URL = 'https://airclass.up.railway.app/api/v1/meeting';

function getResponse() {
    return fetch(airclass_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
