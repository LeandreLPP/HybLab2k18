var ctx = document.getElementById("s4-chart-repet");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [79.8, 67.8],
            backgroundColor: [
                'rgba(14.4%, 7.5%, 6.2%, 1)',
                'rgba(67.9%, 30.3%, 29.2%, 1)',
            ],
        },
        ]
    },
    options: { // Add HTML legend
        tooltips: {
            enabled:true,
            
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max:100
                },
                gridLines: {
                    display:false
                },
            }],
            xAxes: [{
                position:'top',
                display:true,
                barPercentage:0.6,
                gridLines: {
                    display:false
                },
            }]
        },
        legend: {
            display:false,
        }
    }
});