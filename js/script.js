const url = "https://api.quotable.io";

const getQuote = () => {        
    fetch(`${url}/random`)
    .then((data) => data.json())
    .then((item) => {
    document.getElementById('author').innerHTML = item.author;
    document.getElementById('quote').innerHTML = item.content;
    });
    
    fetch(`${url}/quotes`)
    .then((data) => data.json())
    .then((item) => {
        console.log(item)
        document.getElementById('author1').innerHTML = item.results[0].author;
        document.getElementById('quote1').innerHTML = item.results[0].content;
        document.getElementById('author2').innerHTML = item.results[1].author;
        document.getElementById('quote2').innerHTML = item.results[1].content;
        document.getElementById('author3').innerHTML = item.results[2].author;
        document.getElementById('quote3').innerHTML = item.results[2].content;
    });
  };

window.addEventListener("load", getQuote);

// Selecting the html class and  
// convert it to an object
  
// const sharebtn = 
//     document.querySelector('.sharebtn')
  
// Creating a bool variable for changing
// the image of share button 
// var bool = 0
  
// Adding an event listener
// sharebtn.addEventListener('click', () => {
  
    // As we clicked the mouse over
    // the share button the bool value.
    //  get flipped and then working of
    // if-else loop get starts
    // bool = !bool
      
//     if (bool == 0) {
//         sharebtn.innerHTML =
//             '<i class="far fa-share-square"></i>'
//     } else {
//         sharebtn.innerHTML =
//             '<i class="fas fa-times"></i>'
//     }
// })


