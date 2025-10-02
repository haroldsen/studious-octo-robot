import { getParkData } from "./parkService.mjs";
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
    const parkData = await getParkData('glac');

    setHeaderFooter(parkData);
    setIntroData(parkData);
    setInfoData(parkData);
}

init();
