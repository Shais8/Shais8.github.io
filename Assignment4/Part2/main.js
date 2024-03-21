const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'pic1.jpg' : 'human eye', 'pic2.jpg' : 'brown waves', 'pic3.jpg' : 'purple flowers', 'pic4.jpg' : 'egyption pharoah wall', 'pic5.jpg' : 'Butterfly'}

/* Looping through images */
for(let i=0; i<images.length; i++){
const newImage = document.createElement('img');
const imageName = images[i];
const imagePath = 'images/' + imageName;
newImage.setAttribute('src', imagePath);
newImage.setAttribute('alt', altText[imageName]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', event=> 
{displayedImage.src = event.target.src;
displayedImage.alt = event.target.alt;
});

}
/* Wiring up the Darken/Lighten button */
