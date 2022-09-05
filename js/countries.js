// const loadCountries = () =>{
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data))
// }

// loadCountries();

// const displayCountries = countries =>{
//     // console.log(countries)
//     const countriesDiv = document.getElementById('countries')
//     for(const country of countries){
//         // console.log(country)
//         const div = document.createElement('div')
//         div.classList.add('country')

//         const h3 = document.createElement('h3')
//         h3.innerText = country.name;

//         const p = document.createElement('p')
//         p.innerText = country.capital;
        
//         div.innerHTML = `
//         <h3>${country.name} </h3>
//         <p>${country.capital}</p>
//         <button onclick="countryDetails('${country.name}')">Details</button>
//         `
//         countriesDiv.appendChild(div)
//     }
// }

// const countryDetails = name =>{
//     const url = `https://restcountries.com/v2/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayCountryDetails(data[0]))
// }
// const displayCountryDetails = country =>{
//     // country.log(country)
//     const containerDiv = document.getElementById('country-details')
//     containerDiv.innerHTML = `
//     <h4>${country.name}</h4>
//     <p>${country.capital}</p>
//     <img width='200px' src=${country.flag} alt="">

//     `
//     // containerDiv.style.backgroundColor = 'blue'
//     // containerDiv.style.margin = '10px'
//     // containerDiv.style.padding = '10px'
//     // containerDiv.style.textAlign = 'center'
//     // containerDiv.style.color = 'white'

// }

const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    console.log(countries);
    const countriesDiv = document.getElementById('countries')
    for(const country of countries){
       const div = document.createElement('div') 
       div.classList.add('country')
       div.innerHTML = `
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onclick="loadDetails('${country.name}')">Details</button>
       `
       countriesDiv.appendChild(div)
    }
}
const loadDetails = name =>{
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoad(data[0]))
}

const displayLoad = (country)=>{
    console.log(country)
    const containerDiv = document.getElementById('country-details')
    containerDiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>${country.capital}</p>
    <img width='200px' src=${country.flag} alt="">

    `
}