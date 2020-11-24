// 
// Define Variables 

var moodInput = $("#inputMood").val()
let results = []
// Get the input from the user and save it to local storage 
$("#searchBtn").click(function () {
    let searchResult = {}
    searchResult.input
    searchResult.result
    searchResult.input = $("#inputMood").val()
    // fetch results from giphy based on term 
    getGiphyData(searchResult.input)
        .then(giphyData => {
            searchResult.result = giphyData
            storeMoodResult(searchResult.input);
            renderGiphyData(searchResult.result);
        })

    // fetch results from quotes based on terms



}
);

// function to render the data
function renderGiphyData(data) {
    let giphyContainer = $("#giphyCont")
    giphyContainer.html(
        `
      <img src="${data[0].images.fixed_height.url}"/>
      `
    );

    // string interpelation above
    // giphyContainer.innerHTML = ""
    // var gifImg = document.createElement('img');
    // gifImg.setAttribute('src', data[0].images.fixed_height.url);

    // giphyContainer.appendChild(gifImg);

}

// function to get the GIPHY data 

function getGiphyData(inputMood) {
    return new Promise((resolve, reject) => {
        fetch("https://api.giphy.com/v1/gifs/search?q=" + inputMood + "&api_key=m1Xfg0VXns59b9T57eo1ghhh0KJYrA1c&limit=1")
            .then(function (response) {
                return response.json();
            })
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    });


}

// function to store the results 
function storeMoodResult(input) {
    results.push(input)
    localStorage.setItem("mood", JSON.stringify(results))
}
