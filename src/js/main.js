import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkUrl = document.getElementById('park-url');
parkUrl.innerHTML = parkData.fullName;
parkUrl.href = parkData.url;
document.title = `Basic Information - ${parkData.fullName}`;
const bannerImg = document.getElementById('banner-img');
bannerImg.src = parkData.images[0].url;
bannerImg.alt = parkData.images[0].altText;
document.getElementById('park-name').innerHTML = parkData.name;
document.getElementById('park-states').innerHTML = parkData.states;
