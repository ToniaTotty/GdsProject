var myDoughnutchart = document.getElementById('myChart');
            var myDooughnutChart = new chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Clothes', 'Hair', 'Transportation', 'Gucci bag', 'Food', 'Savings'],
                    datasets:[{
                        label: 'Expenses for the month of March',
                        data: [3000, 2500, 3500, 5000, 5000, 6000],
                        backgroundColor:[
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                    }]
                }
            });