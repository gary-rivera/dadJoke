async function joke10times() {
    for (let i = 0; i < 10; i++) {
        console.log(await returnJokeFromObj())
    }
}

// GET request for joke metadata
async function getJokeObj() {
    let jokeData = await axios('https://icanhazdadjoke.com', {headers: {"Accept": "application/json"}})
    return jokeData;
}

// get joke prop from API obj returned
async function returnJokeFromObj() { 
    let joke = await getJokeObj();
    return joke.data.joke
}

$(document).ready(joke10times)