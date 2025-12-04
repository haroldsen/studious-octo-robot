
import "../css/styles.css";
// import "../css/conditions.css";

import { parkCode } from './parkCode.mjs';
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
}

async function init() {
    getParkVisitorCenterDetails();

    const parkData = await getParkData(parkCode);

    setHeaderFooter(parkData);
}

init();
