// const init = () => {
  
//     //add an event listener to the form element that targets the DOM element we want:
// const inputForm = document.querySelector("form");
// //the callback function we've provided will execute and an object representing the event will be passed in as an argument.
// inputForm.addEventListener("submit", (event) => {
// //prevent the default action of refresshing when you click submit
// event.preventDefault();

// event.target.children[1].value;

// console.log(event);

// })};

// document.addEventListener('DOMContentLoaded', init);


//second code to access the input

// const init = () => {
//     const inputForm = document.querySelector("form");
  
//     inputForm.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const input = document.querySelector("input#searchByID");
  
//       console.log(input.value);
  
//       fetch("http://localhost:3000/movies")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           // LOG: (3) [{…}, {…}, {…}]
//         });
//     });
//   };
  
//   document.addEventListener("DOMContentLoaded", init);



//display data on page


  const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const input = document.querySelector('input#searchByID')
    
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
    
        title.innerText = data.title
        summary.innerText = data.summary
      })
    })
  }
  
  document.addEventListener('DOMContentLoaded', init)