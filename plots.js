// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//Plotly.newPlot("myPlot", [{x: [2, 4, 6, 8], y: [20, 40, 60, 80]}]); 

//var trace = [{
    //x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    //type: "bar"
//}];

//var layout = {
    //title: "Luncheon Survey",
    //xaxis: {title: "Food Option"},
    //yaxis: {title: "Number of Respondents"}
//};

//Plotly.newPlot("plotArea", [trace], layout);

var bev = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];

var layout = {
    title: "Popular Beverages",
    xaxis: {title: "Beverages"},
    yaxis: {title: "Percent of Drinks Ordered"}
};

Plotly.newPlot("plotArea", bev, layout);
// solved version in module
//var trace = {
    //x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: "bar"
   //};
   //var data = [trace];
   //var layout = {
    //title: "'Bar' Chart",
    //xaxis: {title: "Drinks"},
    //yaxis: {title: "% of Drinks Ordered"}
   //};
   //Plotly.newPlot("plotArea", data, layout);

// create a pie chart
   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);
// create a scatter plot
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter"
   };
   var data = [trace];
   var layout = {
    title: "'scatter' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

   var numbers = [0,2,4,6,8];
var add5 = numbers.map(function(add){
    return add + 5;
});
console.log(add5);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(population){
    return population.population;
});
console.log(cityPop);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);