export function createHome(container) {
    const about = document.createElement('section');
    about.id = 'about';
    about.innerHTML = `
        <p>My name is Jingyi Ma.</p>
        <p>A designer and builder. I graduated with a business degree with a fine arts minor from UPENN. I enjoy the intersection of business and creativity. Email or DM me if you would like to work together on a project and just chat! Thanks for stopping by!</p>
        <p>    </p>
        <p>Jin</p>
    `;
    container.appendChild(about);
}