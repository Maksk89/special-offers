'use strict';
function addOffer(parentEl, offer) {
    if (offer.remainingDays !== 0) {
        const imageEl = document.createElement('img');
        imageEl.src = offer.image;
        parentEl.appendChild(imageEl);

        const remainingDaysEl = document.createElement('span');
        remainingDaysEl.textContent = `Осталось (дней): ${offer.remainingDays}`;
        parentEl.appendChild(remainingDaysEl);

        const titleEl = document.createElement('h3');
        titleEl.textContent = offer.title;
        parentEl.appendChild(titleEl);

        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = offer.description;
        parentEl.appendChild(descriptionEl);
    }
    const imageEl = document.createElement('img');
    imageEl.src = offer.image;
    parentEl.appendChild(imageEl);

    const titleEl = document.createElement('h3');
    titleEl.textContent = offer.title;
    parentEl.appendChild(titleEl);

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = offer.description;
    parentEl.appendChild(descriptionEl);

}


