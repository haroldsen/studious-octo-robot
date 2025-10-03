
export function mediaCardTemplate(info) {
    let mediaCard = `
    <div class="media-card">
        <a src="${info.link}">
            <img src="${info.image}" alt="${info.imgAlt}">
            <h2>${info.name}</h2>
        </a>
        <p>${info.description}</p>
    </div>
    `;
    return mediaCard;
}
