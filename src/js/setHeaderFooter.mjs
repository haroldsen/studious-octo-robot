
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
    setHeaderInfo(data);
    setFooterData(data);
}
