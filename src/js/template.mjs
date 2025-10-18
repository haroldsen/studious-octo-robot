
import spritePath from '../images/sprite.symbol.svg';

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

export function alertItemTemplate(alert) {
    let category = `alert-${alert.category.toLowerCase()}`;
    if (alert.category.toLowerCase() === 'park closure') {
        category = 'alert-closure';
    }
    return `
        <li>
            <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#${category}"></use></svg>
            <div>
                <h3 class="${category}">${alert.title}</h3>
                <p>${alert.description}</p>
            </div>
        </li>
    `;
}

export function visitorCenterTemplate(visitorCenter) {
    return `
        <div>
            <h3>${visitorCenter.name}</h3>
            <p>${visitorCenter.description}</p>
        </div>
    `;
}
