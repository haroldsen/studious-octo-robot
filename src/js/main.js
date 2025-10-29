
import "../css/styles.css";
import "../css/home.css";

import { getInfoLinks, getParkData } from "./parkService.mjs";
import { mediaCardTemplate } from "./template.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function setIntroData(data) {
    document.getElementById('intro-header').innerHTML = data.fullName;
    document.getElementById('intro-description').innerHTML = data.description;
}

function setInfoData(infoList) {
    const infoSection = document.getElementById('info');
    for (let index = 0; index < infoList.length; index ++) {
        infoSection.insertAdjacentHTML('beforeend', mediaCardTemplate(infoList[index]));
    }
}

async function init() {
    const parkData = await getParkData('maca');

    setHeaderFooter(parkData);
    setIntroData(parkData);
    setInfoData(getInfoLinks(parkData));
}

function enableNavigation() {

    let menuButton = document.getElementById('global-nav-toggle');    
    let globalNav = document.getElementById('global-nav');

    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        let clickedDiv = target.closest('div').className;
        if (clickedDiv === 'global-nav__toggle--closed') {
            globalNav.style.maxHeight = '200px';
            menuButton.ariaExpanded = 'true';
        } else if (clickedDiv === 'global-nav__toggle--open') {
            globalNav.style.maxHeight = '0';
            menuButton.ariaExpanded = 'false';
        }
    });
}

enableNavigation();
init();
