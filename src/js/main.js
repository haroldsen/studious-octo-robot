
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

    menuButton.addEventListener("click", (e) => {
        let target = e.target;
        let clickedDiv = target.closest('div').className;
        if (clickedDiv === 'global-nav__toggle--closed') {
            // globalNav.style.maxHeight = '275px';
            globalNav.style.maxHeight = 'fit-content';
            menuButton.ariaExpanded = 'true';
        } else if (clickedDiv === 'global-nav__toggle--open') {
            globalNav.style.maxHeight = '0';
            menuButton.ariaExpanded = 'false';
        }
    });

    globalNav.addEventListener('click', (e) => {
        let parentButton = e.target.closest('button');
        if (parentButton) {
            let isOpen = parentButton.classList.contains('open');
            let parentLi = e.target.closest('li');
            if (isOpen) {
                parentLi.ariaExpanded = 'false';
            } else {
                parentLi.ariaExpanded = 'true';
            }
        }
    });
}

enableNavigation();
init();
