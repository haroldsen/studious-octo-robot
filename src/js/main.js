
import { getParkData } from "./parkService.mjs";
import { mediaCardTemplate } from "./template.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function setIntroData(data) {
    document.getElementById('intro-header').innerHTML = data.fullName;
    document.getElementById('intro-description').innerHTML = data.description;
}

function setInfoData(infoList) {
    console.log(infoList.images[0]);
    const infoSection = document.getElementById('info');
    for (let index = 0; index < infoList.images.length; index ++) {
        infoSection.insertAdjacentHTML('beforeend', mediaCardTemplate(infoList.images[index]));
    }
}

async function init() {
    const parkData = await getParkData('maca');

    setHeaderFooter(parkData);
    setIntroData(parkData);
    setInfoData(parkData);
}

init();
