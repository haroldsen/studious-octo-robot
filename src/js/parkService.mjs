
import { visitorCenterTemplate } from "./template.mjs";

const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {}
  const response = await fetch(baseUrl + url, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    data = await response.json();
  } else throw new Error("response not ok")
    return data;
}

export async function getParkData(requestedParkCode) {
  const parkData = await getJson(`parks?parkCode=${requestedParkCode}`);
  return parkData.data[0];
}

export async function getAlertData(requestedParkCode) {
  const alertData = await getJson(`alerts?parkCode=${requestedParkCode}`);
  return alertData.data;
}

export async function getVisitorCentersForPark(requestedParkCode) {
  const visitorCenterData = await getJson(`visitorcenters?parkCode=${requestedParkCode}`);
  return visitorCenterData.data;
}

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg",
    description: "See what conditions to expect in the park before leaving on your trip!",
    imgAlt: ""
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg",
    description: "Learn about the fees and passes that are available.",
    imgAlt: ""
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7D8903-1DD8-B71B-0BA8669AEEF74379.jpg",
    description: "Learn about the visitor centers in the park.",
    imgAlt: ""
  }
];

export function getInfoLinks(data) {
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data.images[index + 2].url;
    item.imgAlt = data.images[index + 2].altText;
    return item;
  });
  return withUpdatedImages;
}

export async function getVisitorCenterData(id='6DC6F87E-5D33-469F-8C9C-6D821186633A') {
  const vistorCenterJSON = await getJson(`visitorcenters?parkCode=yell`);
  const visitorCenters = vistorCenterJSON.data;
  for (let i = 0; i < visitorCenters.length; i ++) {
    console.log(visitorCenters[i].id);
    if (visitorCenters[i].id == id) {
      console.log(visitorCenters[i]);
      return visitorCenters[i];
    }
  }
}
