let countries = []
const inp = document.querySelector('input')

$.get(`https://api.covid19api.com/dayone/country/south-africa/status/confirmed`, hello => {
    console.log(hello)
})
const updateGlobalData = ({ TotalDeaths, TotalConfirmed, NewDeaths, NewConfirmed }) => {
    document.querySelector('#gct').textContent = TotalConfirmed.toLocaleString('en-IL')
    document.querySelector('#gcd').textContent = NewConfirmed.toLocaleString('en-IL')
    document.querySelector('#gdt').textContent = TotalDeaths.toLocaleString('en-IL')
    document.querySelector('#gdd').textContent = NewDeaths.toLocaleString('en-IL')
}
const displayCountriesTable = (filteredCountries) => {
    const table = document.querySelector('table')
    table.innerHTML = `
    <thead>
        <tr>
            <th>Country</th>
            <th>Daily Cases</th>
            <th>Total Cases</th>
            <th>Daily Deaths</th>
            <th>Total Deaths</th>
        </tr>
    </thead>
    `
    // filteredCountries = countries.filter(country => country.Country.toLowerCase().includes(inp.value.toLowerCase()))
    if (!filteredCountries.length) {
        table.innerHTML = `
        <tr>
            <th>Couldn't find your country 🥴</th>
        </tr>`
    }
    for (const country of filteredCountries) {
        table.innerHTML += `
        <tr>
            <td>${country.Country}</td>
            <td>${country.NewConfirmed.toLocaleString('en-IL')}</td>
            <td>${country.TotalConfirmed.toLocaleString('en-IL')}</td>
            <td>${country.NewDeaths.toLocaleString('en-IL')}</td>
            <td>${country.TotalDeaths.toLocaleString('en-IL')}</td>
        </tr>
        `
    }
}
$(".biggerToSmall").click(function () {
    let xyz = countries.sort((a, b) => { return b.TotalConfirmed - a.TotalConfirmed })
    console.log(xyz)
    displayCountriesTable(xyz)
})
$(".mostCasesMoreThan1m").click(function () {
    let xyz = countries.sort((a, b) => { return b.TotalConfirmed - a.TotalConfirmed })
    let lyz = xyz.filter((bigger1m) => bigger1m.TotalConfirmed > 1000000)
    console.log(lyz)
    displayCountriesTable(lyz)
})
const getData = async () => {
    const res = await fetch('https://api.covid19api.com/countries')
    const data = await res.json()
    console.log(data)
    countries = data.Countries
    updateGlobalData(data.Global)

    displayCountriesTable(countries)
}


let time = new Date
console.log(time)
let xyz = moment("2021-11-27T21:35:47.252Z").fromNow(true);
console.log(xyz)
const last = document.querySelector(".last")
last.textContent = xyz
getData()

inp.addEventListener("keyup", displayCountriesTable)
