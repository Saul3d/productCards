const tours = [
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
    {
        name:'VIETNAM AND ANGKOR WAT',
        description: `ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        reviews: 4,
        price: '$2500',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        region: 'Asia' 
    }
];
printToDom (divId, textToPrint) {
    const  selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const cardBuilder = (monkeybutts) => {
    let domString = '';
    monkeybutts.forEach((pie) => {
        // console.log(pie);
        domString += `<div class="">`
        domString += `<h2>${pie.name}</h2>`;
        domString += `<img src=${pie.imageURL}>`;
        domString += `</div>`
    })
    // console.log(domString);
    printToDom('pies', domString);
};
    const buttonClick = (e) =>{
    const buttonId = e.target.id;
    const selectedPies = [];

    pies.forEach((pie) => {
        if (buttonId === pie.instructor) {
            selectedPies.push(pie);
        }
    });
    if (buttonId === 'All'){
        cardeBuilder(pies);
    
    } else {
        cardBuilder(selectedPies);
    }
    // pieBuilder(selectedPies);

};
const buttonEvents = ()=> {
    document.getElementById('Zoe').addEventListener('click', buttonClick);
    document.getElementById('Saul').addEventListener('click', buttonClick);
    document.getElementById('Michael').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);
    document.getElementById('Zoe').addEventListener('click', buttonClick);
    document.getElementById('Saul').addEventListener('click', buttonClick);
    document.getElementById('Michael').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);


const init = () => {
    
}
init();