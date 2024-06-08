// Light and dark mode toggle function
// let modeChange = document.getElementsByClassName('mode')

// Added the below function to the logic.js file, since I want both
// form and blog to do the same thing. 

// for (let i = 0; i < modeChange.length; i++) {
//     const element = modeChange[i];

//     element.addEventListener('click', function(event){
//         console.log(event.target.value);
//         if (event.target.value ==='dark') {
//             document.body.classList.add('dark')
//             document.body.classList.remove('light')
//         }else{
//             document.body.classList.add('light')
//             document.body.classList.remove('dark')
//         }
//     })
    
// }



// The submit button function and saving to local storage
function myClickFunction(event) {
    // console.log(event);
    document.getElementById("blogForm").submit();
    event.preventDefault();
    localStorage.setItem("username", "");
    localStorage.setItem("title", "");
    localStorage.setItem("content", "");
}


// localStorage.setItem("username", "");