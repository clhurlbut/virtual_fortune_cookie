

// Define Variables 
var moodInput = $("#inputMood").val()

// Create the opening page which has the cookie (together, lol) and the input

// Get the input from the user and save it to local storage 
$("#searchBtn").click(function(){
    var moodInput = $("#inputMood").val()
    console.log(moodInput)
    localStorage.setItem("mood", moodInput)
    fetch("https://api.giphy.com/v1/gifs/search?q=" + moodInput + "&api_key=m1Xfg0VXns59b9T57eo1ghhh0KJYrA1c&limit=1")
    
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response.data[0]);
 
  let giphyContainer = document.querySelector("#giphyCont")
  
  giphyContainer.innerHTML = ""
  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
 
  giphyContainer.appendChild(gifImg);
})
}

);
// Take the input from user and run a search with Quotes.REST API to return quote with limited integers and SFW rating

// Take input from user and run a search in GIPHY API to return GIF with SFW rating

// Log the 4 previous fortunes below - use logic to make it so when you click the old fortune it takes the string from local storage and 
// runs the function to retrieve the quote and gif for it. Might not be the same one each time, but that is ok 
// Actually I do not even know if we need this! 

// function to animate the cookie open when button is clicked 
//  $('#searchBtn').onClick(function(){
//  $('#cookieLeft').addClass('animate_animated', 'animate_rotateOutUpLeft');
//  $('#cookieRight').addClass('animate_animated', 'animate_rotateOutUpRight');
//  });

// function to display fortune and gif together after cookie is opened and hide everything else, insert new button to get a new cookie
// and call the function to go back to the start page 




