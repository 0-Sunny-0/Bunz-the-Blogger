// Global variables for local storage function

const blogForm = document.querySelector('#blogForm');
const submit = document.querySelector('#submit');

// Event listener for submission click. Be sure to include prevent default. 
// Check console log to ensure form information has been saved. 

submit.addEventListener('click', function(event) {
    event.preventDefault();
    const username = blogForm.querySelector('#username').value;
    const title = blogForm.querySelector('#title').value;
    const content = blogForm.querySelector('#content').value;

    if (username === '' || title === '' || content === '') {
                alert('Aht Aht! Fill out those fields big dawg.'); 
                return;
    };

    const formData = {
        username: username,
        title: title,
        content: content
    }; 
    
    const formDataString = JSON.stringify(formData);

    localStorage.setItem('formData', formDataString);
    console.log('Form data has been saved to local storage.');

    var url = "./blog.html"
    window.location = url;

});

// Function to validate if form fields have been filled out. 
// ended up adding this to the above function. The variables were off, which 
// was causing the function to....not function (slaps knee)

// document.getElementById('blogForm').addEventListener("submit", validateForm);
// function validateForm() {
//     const username = document.getElementById('#username').value;
//     const title = document.getElementById('#title').value;
//     const content = document.getElementById('#content').value;

//     if (username === '' || title === '' || content === '') {
//         alert('Aht Aht! Fill out those fields big dawg.'); 
//         return;
//     };
// };


// function to retrieve data from local storage

// const posts = localStorage.getItem('formData');


