import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./template.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();

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

setHeaderFooter(parkData);
setIntroData(parkData);
setInfoData(parkInfoLinks);
