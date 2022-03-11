// line chart with x and y axes
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  // variable assigned to DOM element with id of dropdownMenu, which is the dropdown menu from index.html
  // variable dataset is assigned to value of the option selected by the user, dataset1 or dataset2. 
  // rest of the function deals with switching between the 2 datasets
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  // xdata remains same, ydata depends on which dropdown menu is selected. 
  //x and y are assembled inside the trace object
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  // the restyle method accepts an object(trace) as its data argument rather than an array.
  // this rerenders the page on the browser
  // the first argument "plot" refers to HTML div, and second argument, trace, refers to a JS object that contains the data
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();