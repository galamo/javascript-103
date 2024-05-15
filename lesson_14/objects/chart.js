class Chart {
    constructor(_id, _options) {
        this.id = _id
        this.options = new ChartOptions(_options.type, _options.data, _options.options)
    }
}
class ChartOptions {
    constructor(_type, _data, _options) {
        // 
    }
}

new Chart("moviesPieChart", {
    type: "pie",
    data: {
        labels: Object.keys(result),
        datasets: [{
            backgroundColor: barColors,
            data: Object.values(result)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Movies distribution"
        }
    }
});