// 
// Define Variables 

var moodInput = $("#inputMood").val()
var cookieAnimateRight = $("#cookieRight");
var cookieAnimateLeft = $("#cookieLeft");

let results = []




// Get the input from the user and save it to local storage 
$("#searchBtn").click(function () {
    // show and hide boxs
    cookieAnimation();
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

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderQuoteData(data)
            // console.log(data)
        })
    //    //fetch results from quotes based on terms
    //     getquoteData(searchResult.input)
    //     .then(quoteData => {
    //         searchResult.result = quoteData
    //         storeMoodResult(searchResult.input);
    //         renderQuoteData(searchResult.result);
    //     }) 
}
);

//     const handleevent = (response) => {
//         console.log(response) //my quote
//     }

//     fetch("https://quotes.rest/qod/categories?language=en&detailed=true")
//     .then (response => response.json())
//     .then(data => handleevent(data.contents.quotes[7]));
// }
// );

// then(giphyData => {
//     searchResult.result = giphyData
//     storeMoodResult(searchResult.input);
//     renderGiphyData(searchResult.result);
// })

// fetch results from quotes based on terms




// function renderQuoteData(data) {
//     let quoteContainer = $("#quoteCont")
//     quoteContainer.html(`text`);
// }

// Animation Functions
function cookieAnimation() {
    cookieAnimateLeft.addClass('animate__animated animate__rotateOutUpLeft');
    window.setTimeout(function () {
        cookieAnimateLeft.removeClass('animate__animated animate__rotateOutUpLeft');

        $("#cookieBox").hide();
        $("#fortuneBox").show();
        $("#newBtnContainer").show();
        $("#searchContainer").hide();
    }, 2000);

    cookieAnimateRight.addClass('animate__animated animate__rotateOutUpRight');
    window.setTimeout(function () {
        cookieAnimateRight.removeClass('animate__animated animate__rotateOutUpRight');

        $("#cookieBox").hide();
        $("#fortuneBox").show();
        $("#newBtnContainer").show();
        $("#searchContainer").hide();
    }, 2000);
};

// jQuery for newCookieButton

$("#newCookieBtn").click(function () {
    $("#fortuneBox").hide();
    $("#newBtnContainer").hide();
    $("#cookieBox").show();
    $("#searchContainer").show();
    clearInput();

});
// function to render the data
function renderGiphyData(data) {
    let giphyContainer = $("#giphyCont")
    giphyContainer.html(
        `
      <img class="center-align responsive-img" src="${data[0].images.fixed_height.url}"/>
      `
    );

}

// function to get the GIPHY data 

function getGiphyData(inputMood) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${inputMood}&api_key=m1Xfg0VXns59b9T57eo1ghhh0KJYrA1c&limit=1&rating=pg-13&lang=en`)
            .then(function (response) {
                return response.json();
            })
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    });




}

function renderQuoteData(data) {
    var randomQuote = data[Math.floor(Math.random() * data.length)]
    let quoteContainer = $("#quoteCont")
    quoteContainer.html(randomQuote.text);
    // renderQuoteData(Math.floor(Math.random() * 10))
    //console.log(randomQuote)
}

function clearInput() {
    document.getElementById("inputMood").value = "";
}

// function to store the results 
function storeMoodResult(input) {
    results.push(input)
    localStorage.setItem("mood", JSON.stringify(results))
}

// We need to dynamically make the previous fortune cookies a button that runs the function to get the fortune 
// with that specific search term 