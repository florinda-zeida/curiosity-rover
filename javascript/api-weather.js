const weatherApi = `https://api.nasa.gov/insight_weather/?api_key=OHEbI7rTkhvwIuzGPAUuwvezPdwKXaxcbU0CDoSI&feedtype=json&ver=1.0`;





const currentSolElement = document.querySelector(`[data-number]`)
const currentDateElement = document.querySelector('[data-current-date]')
const curTempHigh = document.querySelector(`[data-temp-high]`)
const curTempLow = document.querySelector(`[data-temp-low]`)

let selectedSolIndex

getWeatherApi().then(sols => {
    selectedSolIndex = sols.length -1
    displaySelectedSol(sols)
    
})

function displaySelectedSol(sols) {
    const selectedSol = sols[selectedSolIndex]
    currentSolElement.innerText = selectedSol.sol
    currentDateElement.innerText = displayDate(selectedSol.date)
    curTempHigh.innerText = selectedSol.maxTemp
    curTempLow.innerText = selectedSol.minTemp
}

function displayDate(date) {
    // Take date the function is handed, do some convert and return it.
	return date.toLocaleDateString(
		undefined,
		{ day: 'numeric', month: 'long' }
	)
}


function getWeatherApi() {
    return fetch(weatherApi)
    .then(res => res.json())
        .then(data => {
            const {
                sol_keys,
                validity_checks,
                ...solData
             } = data
             console.log(data);
            return Object.entries(solData).map(([sol,data]) => {
                return {
                    sol: sol,
                    minTemp:data.mn,
                    maxTemp:data.mx,
                    date: new Date(data.First_UTC)
                    
                }
            })
            
        })
    }
    