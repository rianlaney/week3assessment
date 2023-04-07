console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted Succesfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//mouse over
let img = document.getElementById('img')
img.addEventListener('mouseover', (event)=>alert('you found batduck'))
