const tours = [
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `Explore the world renowned temples of Angkor Wat, visit the spectacularly beautiful Halong Bay, and see remnants of the Vietnam war, all while enjoying the comforts of deluxe and first class hotels. Call WorldTravel today to book your next incredible journey!`,
        reviews: 3146,
        stars: 4,
        price: '$2599',
        imageURL: './assets/img/vietnam.jpg',
        duration: 15,
        region: 'asia',  
    },
    {
        name:'Splendors of Egypt',
        description: `Are you intrigued by the mystery of mummies? Have you imagined yourself in a scene from an Indiana Jones film? Here’s your chance to be an amateur Egyptologist, digging into this country’s enigmatic architecture and antiquities. The highlight of our escorted Egypt tour package is the Great Pyramid of Giza, one of the seven wonders of the world. You’ll also cruise along the legendary Nile in a level of comfort even Cleopatra would approve of. Along with captivating commentary, your WorldTravel guide will offer tips, tailored to your interests and activity level, on how to make the very most of your free time in the land of the pharaohs.`,
        reviews: 3146,
        stars: 4,
        price: '$2149',
        imageURL: './assets/img/egypt.jpg',
        duration: 10,
        region: 'africa',  
    },
    {
        name:'Wonders of Israel',
        description: `From dazzling Tel Aviv (called “The Mediterranean Capital of Cool” by the NY Times) to the inspiring sights of 3,000-year-old Jerusalem, Israel reveals incredible beauty, history and spirit, and our guides are passionate about telling its stories. Our escorted Holy Land tour with airfare from the U.S. takes you from uplifting places of faith to the world’s lowest spot (The Dead Sea) and includes a unique hotel stay at a kibbutz.`,
        reviews: 3146,
        stars: 4,
        price: '$3899',
        imageURL: './assets/img/israel.jpg',
        duration: 11,
        region: 'africa', 
    },
    {
        name:'Treasures of Turkey',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 3146,
        stars: 4,
        price: '$2299',
        imageURL: './assets/img/turkey.jpg',
        duration: 14,
        region: 'asia', 
    },
    {
        name:'The Best of China',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 3146,
        stars: 4,
        price: '$2900',
        imageURL: './assets/img/china.jpg',
        duration: 18,
        region: 'asia',  
    },
    {
        name:'Austria/Vienna Tour',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 3146,
        stars: 4,
        price: '$3199',
        imageURL: './assets/img/austria.jpg',
        duration: 15,
        region: 'easternEurope',  
    },
    {
        name:'Treasures of Portugal',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 3146,
        stars: 4,
        price: '$2399',
        imageURL: './assets/img/portugal.jpg',
        duration: 11,
        region: 'westernEurope',  
    },
    {
        name:'Magical Ireland',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 3146,
        stars: 4,
        price: '$2700',
        imageURL: './assets/img/ireland.jpg',
        duration: 17,
        region: 'westernEurope', 
    }
];
const printToDom = (divId, textToPrint) => {
    const  selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const cardBuilder = (tours) => {
    let domString = '';
    tours.forEach((tour) => {
        
        domString += `<article>`
        domString += ` <div class="image-wrapper">`
        domString += `<img src='${tour.imageURL}' alt='tour image' title='${tours.name}'>`
        domString += `</div>`
        domString += `<div class="info-wrapper">`
        domString += `<section class="description-section">` 
        domString += `<header>`
        domString += `<label for="description">${tour.name}</label> `
        domString += `<i class="fas fa-map-marked-alt"></i> `
        domString += `</header>`
        domString += `<p class="description">`
        domString += `${tour.description}`
        domString += `</p>`
        domString += `</section>`
        domString += `<section class="specification-section">`
        domString += `<div class="reviews-section">`
        domString += `<div class="star-wrapper">`
        domString += `<i class="fas fa-star selected"></i>`
        domString += `<i class="fas fa-star selected"></i>`
        domString += `<i class="fas fa-star selected"></i>`
        domString += `<i class="fas fa-star selected"></i>`
        domString += `<i class="fas fa-star"></i>`
        domString += `</div>`
        domString += `<p><span>${tour.reviews}</span> Reviews</p>`
        domString += `</div>`
        domString += `<span class="icon-wrapper">`
        domString += `<i class="far fa-comment-alt"></i>`
        domString += `<i class="far fa-comment-alt"></i>`
        domString += `</span>`
        domString += `</section>`
        domString += `<section class="pricing-section">`
        domString += `<div class="price-wrapper">`
        domString += `<span class="price">${tour.price}</span>`
        domString += `<p>Air + Tax included</p>`
        domString += `</div>`
        domString += `<i class="fas fa-plane"></i>`
        domString += `<p class="days">${tour.duration} | Days</p>`
        domString += `</section>`
        domString += `</div>`
        domString += `<footer>`
        domString += `<button>Book Now</button>`
        domString += `<button>Request Info</button>`
        domString += `</footer>`
        domString += `</article>`
        // document.documentElement.style.setProperty('--tourBackgroundImage', `${tour.imageURL}`);
    });
    printToDom('cardSection', domString);
};
    const buttonClick = (e) => {
    console.log(`button was clicked: ${e.target.id}`);
    const buttonId = e.target.id;
    const selectedTours = [];

    tours.forEach((tour) => {
        if (buttonId === tour.region) {
            selectedTours.push(tour);
        }
    });
    if (buttonId === 'tours'){
        cardBuilder(tours);
    } else {
        cardBuilder(selectedTours);
    }
};
const buttonEvents = ()=> {
    document.getElementById('tours').addEventListener('click', buttonClick);
    document.getElementById('africa').addEventListener('click', buttonClick);
    document.getElementById('asia').addEventListener('click', buttonClick);
    document.getElementById('southEastAsia').addEventListener('click', buttonClick);
    document.getElementById('australia').addEventListener('click', buttonClick);
    document.getElementById('easternEurope').addEventListener('click', buttonClick);
    document.getElementById('westernEurope').addEventListener('click', buttonClick);
    document.getElementById('northAmerica').addEventListener('click', buttonClick);
    document.getElementById('southAmerica').addEventListener('click', buttonClick);
}

const init = () => {
    buttonEvents();
    cardBuilder(tours);
}

init();