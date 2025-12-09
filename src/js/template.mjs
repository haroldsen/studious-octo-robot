
import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(info) {
    let link = info.link;
    if (link == 'visitor_centers.html') {
        link = 'conditions.html?f=vc';
    }
    let mediaCard = `
    <div class="media-card">
        <a href="${link}">
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
            <a href="visitor-center.html?id=${visitorCenter.id}"><h3>${visitorCenter.name}</h3></a>
            <p>${visitorCenter.description}</p>
        </div>
    `;
}

export function listTemplate(data, templateFunction) {
    const html = data.map(templateFunction);
    return html.join('');
}

export function visitorCenterImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}"></li>`;
}

export function visitorCenterAmenityTemplate(data) {
    return `<li>${data}</li>`;
}
