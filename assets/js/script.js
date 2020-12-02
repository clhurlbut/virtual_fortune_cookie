// 
// Define Variables 

var moodInput = $("#inputMood").val()
let results = []

// Get the input from the user and save it to local storage 
$("#searchBtn").click(function () {
    // show and hide boxs
    $("#fortuneBox").show();
    $("#newBtnContainer").show();
    $("#cookieBox").hide();
    $("#searchContainer").hide();
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



// jQuery for newCookieButton

$("#newCookieBtn").click(function () {
    location.reload();

});
// function to render the data
function renderGiphyData(data) {
    let giphyContainer = $("#giphyCont")
    giphyContainer.html(
        `
      <img class="responsive-img" src="${data[0].images.fixed_height.url}"/>
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
        fetch(`https://api.giphy.com/v1/gifs/search?q=${inputMood}&api_key=m1Xfg0VXns59b9T57eo1ghhh0KJYrA1c&limit=1&rating=pg-13&lang=en`)
            .then(function (response) {
                return response.json();
            })
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    });




}

// function getquoteData(inputMood){
//      return new Promise((resolve, reject) =>{
//          fetch("www.famous-quotes.uk/api.php?sortby=" + inputMood + "newest&tags_and&maxlength10=mood")
//          .then(function(response) {
//              return response.json();
//          })
//          .then (result => resolve(result.data))
//          .catch(err => reject(err))

//     });
// }
function renderQuoteData(data) {
    var randomQuote = data[Math.floor(Math.random() * data.length)]
    let quoteContainer = $("#quoteCont")
    quoteContainer.html(randomQuote.text);
    // renderQuoteData(Math.floor(Math.random() * 10))
    console.log(randomQuote)
}

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderQuoteData(data)
        // console.log(data)
    })
// function to store the results 
function storeMoodResult(input) {
    results.push(input)
    localStorage.setItem("mood", JSON.stringify(results))
}

