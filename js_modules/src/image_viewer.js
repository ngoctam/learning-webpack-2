import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
// image.src = 'http://placehold.it/400x400';
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);
