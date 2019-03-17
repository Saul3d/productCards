const tours = [
    {
        name:'Dutch Apple Pie',
        description: 'Apples, sugar, butter, cinnimon, nutmeg, dutch people',
        reviews: 5000,
        price: 'Earl Grey tea',
        image: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL',
        duration: 10,
        country: 'Zoe' 
    }
] 
printToDom (divId, textToPrint) {
    const  selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const pieBuilder = (monkeybutts) => {
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
        pieBuilder(pies);
    
    } else {
        pieBuilder(selectedPies);
    }
    // pieBuilder(selectedPies);

};
const buttonEvents = ()=> {
    document.getElementById('Zoe').addEventListener('click', buttonClick);
    document.getElementById('Saul').addEventListener('click', buttonClick);
    document.getElementById('Michael').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);


const init = () => {
    
}
init();