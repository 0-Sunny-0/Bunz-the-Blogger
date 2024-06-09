// Function to get items from local storage and display on
// blog page. 

const formData = JSON.parse(localStorage.getItem('formData'));

if (formData) {
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = `
        <p>Username: ${formData.username}</p>
        <p>Title: ${formData.title}</p>
        <p>Content: ${formData.content}</p>
    `;
} else {
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = '<p>No information found in local storage</p>';

    // var url = "./blog.html"
    // window.location = url;

};
