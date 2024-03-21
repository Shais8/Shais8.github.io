const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pc1.jpg', 'pc2.jpg', 'pc3.jpg', 'pc4.jpg', 'pc5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'pc1.jpg': 'human eye', 'pc2.jpg': 'brown waves', 'pc3.jpg': 'purple flowers', 'pc4.jpg': 'egyption pharoah wall', 'pc5.jpg': 'Butterfly'}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
