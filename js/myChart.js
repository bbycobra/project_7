var ctx = document.getElementById('traffic-chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"
        ],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500
            ],
            backgroundColor: [
                'rgba(116, 119, 191, .3)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById('daily-chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: [
                '#7477BF',
                '#7477BF',
                '#7477BF',
                '#7477BF',
                '#7477BF',
                '#7477BF',
                '#7477BF',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
        display: false
        }            
    }
});

var ctx = document.getElementById('mobile-chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ],
            borderWidth: 0,
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
            
    }
});