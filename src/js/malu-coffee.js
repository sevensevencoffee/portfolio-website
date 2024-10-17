import maluCoffee1 from '../images/malu/malu-1.jpg';
import maluCoffee2 from '../images/malu/malu-2.jpg';
import maluCoffee3 from '../images/malu/malu-3.jpg';
import maluCoffee4 from '../images/malu/malu-4.jpg';

export function createMaluCoffee(container) {
    const introText = document.createElement('section');
    introText.innerHTML = `
        <p>Malu Coffee was my pandemic brainchild and the first venture where I built a brand and product from scratch. I was deeply involved in every facet of its creation, starting with the initial concept and carrying through to market launch. This included conducting thorough product research, setting the creative direction, overseeing production processes, sourcing high-quality coffee beans, and securing a sensory certification to ensure a superior taste experience.</p>
        <br>
        <p><a href="https://www.instagram.com/malu.coffee/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <br>
        <h4>Press</h4>
        <p>
            <a href="https://www.outsideonline.com/food/drinks/this-effortless-pour-over-coffee-will-change-your-camping-game/" target="_blank" rel="noopener noreferrer">Outdoor: This Effortless Pour-Over Coffee Will Change Your Camping Game</a>
        </p>
        <p>
            <a href="https://www.pastemagazine.com/drink/coffee/malu-coffee-pouches-review-pour-over-flavors-varieties-price" target="_blank" rel="noopener noreferrer">Paste: Tasting: 3 Easy Pour-Over Coffee Pouches from Malu Coffee</a>
        </p>
        <p>
            <a href="https://www.collabs.io/mag/malu-coffee/" target="_blank" rel="noopener noreferrer">Founder Interview</a>
        </p>
        <br>
        <h4>Selected Partners</h4>
        <p>
            <a href="https://popupgrocer.com/products/malu-coffee" target="_blank" rel="noopener noreferrer">Pop Up Grocer: Grocery shopping, but make it fun.</a>
        </p>
        <p>
            <a href="https://www.snackmagic.com/menu/brands/malu-coffee?srsltid=AfmBOoqIHsG6UqZUGnCYitNByvej6v40vptHhZqsR3quwOWL03jTTHOG" target="_blank" rel="noopener noreferrer">Snack Magic: Snack for Offices</a>
        </p>
        `;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.innerHTML = `
        <img src="${maluCoffee1}" alt="Malu Coffee">
        <img src="${maluCoffee2}" alt="Malu Coffee">
        <img src="${maluCoffee3}" alt="Malu Coffee">
        <img src="${maluCoffee4}" alt="Malu Coffee">
    `;
    container.appendChild(introText);
    container.appendChild(imageContainer);
}