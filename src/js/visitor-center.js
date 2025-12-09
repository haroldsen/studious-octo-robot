
import "../css/styles.css";
import "../css/visitor-center.css";

import { parkCode } from './parkCode.mjs';
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getVisitorCenterData } from "./parkService.mjs";
import { listTemplate, visitorCenterImageTemplate, visitorCenterAmenityTemplate } from "./template.mjs";

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log(param);
    console.log(urlParams);
    console.log(queryString);

    return urlParams.get(param);
}

function populateImageGallery(data) {
    const galleryHTML = listTemplate(data.images, visitorCenterImageTemplate);
    document.getElementById('visitor-center-gallery-list').innerHTML = galleryHTML;
}

function populateVisitorCenterDetails(data) {
    const addresses = data.addresses;
    const directions = data.directionsInfo;
    const amenities = data.amenities;
    const contacts = data.contacts.phoneNumbers;

    const addressList = document.getElementById('address-list');
    const directionElement = document.getElementById('directions');
    const amenitiesList = document.getElementById('amenities-list');
    const contactList = document.getElementById('contact-list');

    for (let i = 0; i < addresses.length; i ++) {
        addressList.insertAdjacentHTML('beforeend', `
            <li>
                <p>${addresses[i].type}</p>
                <p>${addresses[i].line1}<br>${addresses[i].city}, ${addresses[i].stateCode} ${addresses[i].postalCode}</p>
            </li>
        `);
    }
    directionElement.innerHTML = directions;
    for (let i = 0; i < amenities.length; i ++) {
        amenitiesList.insertAdjacentHTML('beforeend', `
            <li>${amenities[i]}</li>
        `);
    }
    for (let i = 0; i < contacts.length; i ++) {
        contactList.insertAdjacentHTML('beforeend', `
            <li>
                <p>${contacts[i].type}</p>
                <p>${contacts[i].phoneNumber}</p>
            </li>
        `);
    }
}

function populateVisitorCenterIntro(data) {
    document.getElementById('visitor-center-intro').innerHTML = `
        <img src="${data.images[0].url}">
        <p>${data.description}</p>
    `;
}

function setVisitorCenterData(data) {
    document.getElementById('visitor-center-name').insertAdjacentHTML('beforeend', data.name);

    populateImageGallery(data);
    populateVisitorCenterDetails(data);
    populateVisitorCenterIntro(data);
}

async function init() {
    const parkData = await getParkData(parkCode);
    const visitorCenterId = getParam('id');
    const visitorCenterData = await getVisitorCenterData(visitorCenterId);

    setHeaderFooter(parkData);
    setVisitorCenterData(visitorCenterData);
}

init();
