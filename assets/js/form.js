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

    // this is your object. it needs to be placed into an array.
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


