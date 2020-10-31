
            anychart.onDocumentReady(function () {

                // create data
                var data = [
                  {x: "Clothes", value: 3000},
                  {x: "Hair", value: 2500},
                  {x: "Transportation", value: 3500},
                  {x: "Gucci bag", value: 5000},
                  {x: "Food", value: 5000},
                  {x: "Savings", value: 6000}
                ];
                
                
                
                // create a pie chart and set the data
                var chart = anychart.pie(data);
                
                /* set the inner radius
                (to turn the pie chart into a doughnut chart)*/
                chart.innerRadius("30%");
                
                // set the position of labels
                chart.labels().position("outside");
                
                // disable the legend
                chart.legend(true);
                chart.legend().position("right");
                chart.legend().itemsLayout("vertical");
                // set the chart title
                chart.title("Expenses for the month of March");
                
                // set the container id
                chart.container("container");
                
                // initiate drawing the chart
                chart.draw();
                });

            normal:  {
                fill: "#ffff00",
                hatchFill: "percent50"        
             },