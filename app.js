//Variable declarations
let form = document.querySelector('#memeForm');
let urlInput = document.querySelector('input[name="image-url"]');
let topTextInput = document.querySelector('input[name="top-text"]');
let btmTextInput = document.querySelector('input[name="bottom-text"]');
let results = document.querySelector('#results');

//Event listener for Submit button
form.addEventListener('submit', function(e) {
	e.preventDefault();
	let newMeme = makeMeme(urlInput.value, topTextInput.value, btmTextInput.value);
	results.appendChild(newMeme);
	//Set inputs back to empty for the form
	urlInput.value = '';
	topTextInput.value = '';
	btmTextInput.value = '';
});

//Remove button listner
results.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
});

function makeMeme(image, topText, btmText) {
	//creating my elements for the text, images, button, and container
	let meme = document.createElement('div');
	let memeTextU = document.createElement('h3');
	let memeTextL = document.createElement('h3');
	let removeBtn = document.createElement('button');
	image = document.createElement('img');
	//setting the image source to the urlinput value itself, otherwise it returns an object
	image.src = urlInput.value;
	//adding classes to each of my elements
	meme.classList.add('container');
	memeTextU.classList.add('memeTextUpper');
	memeTextL.classList.add('memeTextLower');
	removeBtn.classList.add('button');
	//setting my newly created h3 elements = my inputs
	memeTextU.innerText = topText;
	memeTextL.innerText = btmText;
	memeTextU.parentElement = image;
	memeTextL.parentElement = image;
	//appending each item, making the text a child of the entire meme container is the only thing that would work for me
	meme.append(image);
	meme.appendChild(memeTextU);
	meme.appendChild(memeTextL);
	removeBtn.innerText = ' Remove Dank Meme';

	meme.appendChild(removeBtn);
	//return the overall memem element
	return meme;
}
