// In reality, the goal of this project wants to be a Shazam like app where it can record the audio
// and give you the movie it's from, but seeing as that's probably too ambitious, I will stick with
// metadata for now. We'll see how far I get.

// Define const variables

const findButton = document.getElementById("findMovie"); // submit button
const movieSection = document.getElementById("musicMovie"); // main div where movie return is put
const movieInfo = { // movie info
    name: null,
    title: null,
    director: null,
    ageRating: null,
    trailerLink: null

}

const addressForm = document.getElementById("addressForm");

function inputHandler() {
    //
    // Handle the submission of a music link
    //

    // Fill in the songlink link to get the correct info
    // about the song
    const givenLink = document.getElementById("addressLink").value;
    const odesliLink = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(givenLink)}`

    console.log(givenLink);
    console.log(odesliLink);


    // Set the iTunes link
    const itunesLink = getItunesLink(odesliLink)

    // Get song metadata from iTunes
    // const itunesMetadata = getItunesMetadata(itunesLink);
}

async function getItunesLink(APILink) {
    //
    // Returns the iTunes-counterpart link to the link given.
    // Parameters:
    //      - API-Link -- The link the data is fetched
    //      from
    // Return: The iTunes link.

    // Return iTunes link from the JS object made from
    // returned JSON.
        await fetch(APILink)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.linksByPlatform.itunes.nativeAppUriDesktop);
            return data.linksByPlatform.itunes.nativeAppUriDesktop;
        })
        .catch((err) => {console.log(err); throw err;})
    }
    


findButton.addEventListener("click", inputHandler);
addressForm.addEventListener("submit", inputHandler);

// https://open.spotify.com/track/4w3tQBXhn5345eUXDGBWZG?si=e4ad2abba75e4e32
// index 5.
// https://music.apple.com/us/album/seinfeld-theme/1572502516?i=1572502517