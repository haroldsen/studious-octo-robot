
import { enableNavigation } from "./navigation.mjs";

function populateHeader() {
    document.getElementsByTagName('header')[0].innerHTML = `
        <section class="global-header">
        <a href="index.html" class="site-title">
          <div id="logo-holder">
            <span class="logo" role="presentation">

            </span>
          </div>
          <span>National Park Service</span>
        </a>
        <div class="global-header__right">
          <a class="search-icon" href="#park-footer">
            <svg class="icon">
              <use xlink:href="/images/sprite.symbol.svg#search"></use>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
          <button
            id="global-nav-toggle"
            class="global-nav__toggle"
            aria-expanded="false"
            aria-label="Open Menu"
          >
            <div class="global-nav__toggle--closed">
              <svg class="icon">
                <use xlink:href="/images/sprite.symbol.svg#menu"></use>
              </svg>
              <span class="visually-hidden">Open</span>Menu
            </div>
            <div class="global-nav__toggle--open">
              <svg class="icon">
                <use xlink:href="/images/sprite.symbol.svg#close"></use>
              </svg>
              Close
            </div>
          </button>
        </div>
      </section>
      <nav id="global-nav" class="global-nav">
          <h2 class="global-nav__section-heading">Explore this Park</h2>
          <ul class="global-nav__list">

            <li aria-expanded='false'>
              <div class="global-nav__split-button">
                <button class="global-nav__split-button__toggle closed">
                  <span>Plan Your Visit</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
                <button class="global-nav__split-button__toggle open">
                  <span>Plan Your Visit</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
              <ul class="global-nav__submenu" aria-label="Plan Your Visit submenu">
                <li><a href="#" >Find a Park</a></li>
                <li><a href="#" >Events</a></li>
                <li><a href="#" >Passes</a></li>
                <li><a href="#" >Trip Ideas</a></li>
              </ul>
            </li>

            <li aria-expanded='false'>
              <div class="global-nav__split-button">
                <button class="global-nav__split-button__toggle closed">
                  <span>Learn & Explore</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
                <button class="global-nav__split-button__toggle open">
                  <span>Learn & Explore</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
              <ul class="global-nav__submenu" aria-label="Learn & Explore submenu">
                <li><a href="#" >About Us</a></li>
                <li><a href="#" >Discover History</a></li>
                <li><a href="#" >Explore Nature</a></li>
                <li><a href="#" >Kids</a></li>
              </ul>
            </li>

            <li aria-expanded='false'>
              <div class="global-nav__split-button">
                <button class="global-nav__split-button__toggle closed">
                  <span>Get Involved</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
                <button class="global-nav__split-button__toggle open">
                  <span>Get Involved</span>
                  <svg class="icon" role="presentation" focusable="false">
                    <use xlink:href="/images/sprite.symbol.svg#arrow"></use>
                  </svg>
                </button>
              </div>
              <ul class="global-nav__submenu" aria-label="Get Involved submenu">
                <li><a href="#" >Donate</a></li>
                <li><a href="#" >Partner</a></li>
                <li><a href="#" >Volunteer</a></li>
                <li><a href="#" >Work for Us</a></li>
              </ul>
            </li>

          </ul>
      </nav>
      <div id="banner-crop">
        <img draggable="false" id="banner-img" src="https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg">
      </div>
      <div id="about-national-park">
        <span id="park-name">Park Name</span>
        <span>
          <p>National Park</p>
          <p id="park-states">States</p>
        </span>
      </div>
      <section id="park-header">
        <ul>
          <li>
            <a draggable="false" href="conditions.html">
              <span>Info</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="/images/sprite.symbol.svg#info"></use>
              </svg>
            </a>
          </li>
          <li>
            <a draggable="false" href="conditions.html">
              <span>Alerts</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="/images/sprite.symbol.svg#alert"></use>
              </svg>
            </a>
          </li>
          <li>
            <a draggable="false" href="#">
              <span>Maps</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="/images/sprite.symbol.svg#location"></use>
              </svg>
            </a>
          </li>
          <li>
            <a draggable="false" href="#">
              <span>Calendar</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="/images/sprite.symbol.svg#calendar"></use>
              </svg>
            </a>
          </li>
          <li>
            <a draggable="false" href="#">
              <span>Fees</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="/images/sprite.symbol.svg#fee-22"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    `;
}

function setHeaderInfo(data) {
    const parkUrl = document.getElementById('park-url');
    parkUrl.innerHTML = data.fullName;
    parkUrl.href = data.url;
    document.title = `Basic Information - ${data.fullName}`;
    const bannerImg = document.getElementById('banner-img');
    bannerImg.src = data.images[0].url;
    bannerImg.alt = data.images[0].altText;
    document.getElementById('park-name').innerHTML = data.name;
    document.getElementById('park-states').innerHTML = data.states;
}

function setFooterData(data) {
    let mailing = data.addresses.find((address) => address.type === "Mailing");
    let voice = data.contacts.phoneNumbers.find((number) => number.type === "Voice");
    
    document.getElementById('park-footer').innerHTML = `
        <section class="contact">
            <h3>Contact Info</h3>
            <h4>Mailing Address:</h4>
            <div>
                <p>${mailing.line1}<p>
                <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
            </div>
            <h4>Phone:</h4>
            <p>${voice.phoneNumber}</p>
        </section>
    `;
}

export function setHeaderFooter(data) {
    populateHeader();
    setHeaderInfo(data);
    setFooterData(data);
    enableNavigation();
}
