var labels= [];
var data=[];

var item;
var amount;

var earning;
var text;




$(function(){

    loadData();
});

// populating the table
function addRow(){
    var confirm = document.getElementById('earnings');
    if ( confirm.value == "" ) {
        text = "Please make sure MONTHLY EARNING is specified";
        document.getElementById('sm').innerHTML = text;
    } else {
        amount = Number(document.getElementById('amount').value);
        item = document.getElementById('item').value;


    earning = Number(earning)-amount;
    document.getElementById('demo').innerHTML= earning;

    
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    

    cel1.innerHTML = item;
    cel2.innerHTML = amount;

    


    pushData();
    }

    
}


function loadData(){
    var ctx1=$("#barChart");
    var ctx2=$("#myChart");

// options
var options = {
    responsive:true,
    title:{
        display:true,
        position:"top",
        text: "Expenses manager",
        fontSize:18,
    },
    legend:{
        display:true,
        position:"bottom",
        labels:{
            fontColor:"#333",
            fontSize:16
        }
    }
};

// bar chart data
var dataCheck = {
    labels,
    datasets:[{
        data,
        backgroundColor:[
        '#6f42c1',
        '#ffc107',
        '#007bff',
        '#fd7e14',
        '#20c997',
        '#e83e8c'],
        borderWidth:[1, 1, 1, 1, 1],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }]
};

// doughnut chart data
var dataCheck = {
        labels,
        datasets:[{
            data,
            backgroundColor:[
            '#6f42c1',
            '#ffc107',
            '#007bff',
            '#fd7e14',
            '#20c997',
            '#e83e8c'],
            borderWidth:[1, 1, 1, 1, 1],
        }]
    };

// chart class object for both charts
var barChart = new Chart(ctx1, {
    type:"bar",
    data: dataCheck,
    options:options
});

var myChart = new Chart(ctx2, {
    type:"doughnut",
    data: dataCheck,
    options:options
});
}
// populating an array for the chart
function pushData(){
    
    // append data to the array
    data.push(amount);
    labels.push(item);
    console.log(data);
    loadData();

    var pval = "";

    for(i=0; i <dataCheck.length; i++)
    {
        pval = pval + dataCheck[i];
    }
    // display array data
    document.getElementById('barChart').innerHTML = pval;
    document.getElementById('myChart').innerHTML = pval;
}

function addtoTop(){
    // get value from the input
    earning = document.getElementById('earnings').value;

    // append data to the tag
    document.getElementById('demo').innerHTML= earning;


    
    const valid = document.getElementById('earnings').value;
    if ( valid == "" ) {
        text = "Amount earned must be specified";
    } else {
        return false;
    }
    document.getElementById('small').innerHTML = text;
}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}    

// function toggle() {
//     document.getElementById('barContainer').style.display = "block";
//     document.getElementById('pieContainer').style.display = "none";
// }

// toggling the charts

function toggle(){
    var x = document.getElementById('barContainer');
    var y = document.getElementById('pieContainer');
    var z = document.getElementById('b');
    var a = document.getElementById('p');
    if (x.style.display == "none"){
        x.style.display = "block";
        y.style.display ="none";
        z.style.display = "none";
        a.style.display = "block";

    } else {
        
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "block";
        a.style.display = "none";
    }
}

