
import "../css/styles.css";
import "../css/conditions.css";

import { getParkData, getAlertData, getVisitorCenterData } from "./parkService.mjs";
import { alertItemTemplate, visitorCenterTemplate } from "./template.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

async function init() {
    const parkData = await getParkData('maca');
    const alertData = await getAlertData('maca');
    const visitorCenterData = await getVisitorCenterData('maca');

    setHeaderFooter(parkData);
    setAlerts(alertData);
    setVisitorCenterData(visitorCenterData);
    setActivities(parkData);
}

function setAlerts(alertData) {
    const alertList = document.getElementById('alert-list');
    for (let i = 0; i < alertData.length; i ++) {
        alertList.insertAdjacentHTML('beforeend', alertItemTemplate(alertData[i]));
    }
}

function setVisitorCenterData(visitorCenterData) {
    const visitorCenters = document.getElementById('visitor-centers');
    for (let i = 0; i < visitorCenterData.length; i ++) {
        visitorCenters.insertAdjacentHTML('beforeend', visitorCenterTemplate(visitorCenterData[i]));
    }
}

function setActivities(parkData) {
    const activities = parkData.activities;
    const activityList = document.getElementById('activity-list');
    for (let i = 0; i < activities.length; i ++) {
        activityList.insertAdjacentHTML('beforeend', `<li>${activities[i].name}</li>`);
    }
}

init();
