async function joke10times() {
    // per Matt there' a better way we'll learn that teaches us to 
    //fire off all 10 jokes at the same time instead of the one at a time
    for (let i = 0; i < 10; i++) {
        console.log(await returnJokeFromObj())
    }
}

// GET request for joke metadata
async function getJokeObj() {
    let jokeData = await axios.get('https://icanhazdadjoke.com', {headers: {"Accept": "application/json"}})
    return jokeData;
}

// get joke prop from API obj returned
async function returnJokeFromObj() { 
    let joke = await getJokeObj();
    return joke.data.joke
}

$(joke10times);