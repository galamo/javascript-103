function init() {
    const button = document.querySelector("#getCountries")
    button.addEventListener("click", async () => {
        try {

            const result = await fetch("https://restcountries.com/v3.1/all")
            // data returned from API 
            const data = await result.json()

            const populationByRegion = data.reduce((regionPopulation, current) => {
                if (regionPopulation[current.region]) {
                    regionPopulation[current.region] = regionPopulation[current.region] + Number(current.population)
                } else {
                    regionPopulation[current.region] = Number(current.population)
                }
                return regionPopulation;
            }, {})
            console.log(populationByRegion)

            const barColors = [
                "red",
                "yellow",
                "blue",
                "green",
                "pink",
                "purple",
                "black"
            ];

            chartElement = new Chart("populationBarChart", {
                type: "bar",
                data: {
                    labels: Object.keys(populationByRegion),
                    datasets: [{
                        label: "population",
                        data: Object.values(populationByRegion),
                        backgroundColor: ["red", "red", "red", "red", "red", "red"],
                    },
                    {
                        label: "married",
                        data: [300001100, 56411065, 5611460, 13004114, 65004165, 300],
                        backgroundColor: ["yellow", "yellow", "yellow", "yellow", "yellow"],
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                },
            });

        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })

}

init()

// We want the following result
// {  "Europe": 152451224, "Asia": 46565468 ..... }
