// Light and dark toggle mode for both form and blog

// For light and dark mode, always remember to change the 
// coloring properties in CSS to ensure it works correctly. 

let modeChange = document.getElementsByClassName('mode')

for (let i = 0; i < modeChange.length; i++) {
    const element = modeChange[i];

    element.addEventListener('click', function(event){
        console.log(event.target.value);
        if (event.target.value ==='dark') {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }else{
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        }
    })
    
}

