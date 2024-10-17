import maluCoffee1 from '../images/malu/malu-1.jpg';
import maluCoffee2 from '../images/malu/malu-2.jpg';
import maluCoffee3 from '../images/malu/malu-3.jpg';
import maluCoffee4 from '../images/malu/malu-4.jpg';

export function createCameraroll(container) {  
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.innerHTML = `
        <img src="${maluCoffee1}" alt="Malu Coffee">
        <img src="${maluCoffee2}" alt="Malu Coffee">
        <img src="${maluCoffee3}" alt="Malu Coffee">
        <img src="${maluCoffee4}" alt="Malu Coffee">
    `;
    container.appendChild(imageContainer);
};