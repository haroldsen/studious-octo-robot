
import "../css/styles.css";
import "../css/conditions.css";

import { parkCode } from './parkCode.mjs';
import { getParkData, getAlertData, getVisitorCentersForPark } from "./parkService.mjs";
import { alertItemTemplate, visitorCenterTemplate } from "./template.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
}

async function init() {
    const parkData = await getParkData(parkCode);
    const alertData = await getAlertData(parkCode);
    const visitorCenterData = await getVisitorCentersForPark(parkCode);

    setHeaderFooter(parkData);
    setAlerts(alertData);
    setVisitorCenterData(visitorCenterData);
    setActivities(parkData);

    // This focuses on the visitor center list if the user attempts to navigate to the visitor centers.
    const visitorCenters = document.getElementById('visitor-centers');
    let focus = getParam('f');
    if (focus) {
        console.log('triggered!');
        visitorCenters.open = true;
        visitorCenters.focus()
    }
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
