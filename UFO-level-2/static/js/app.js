/////////////////////////////////////////////////////////////////////////////////////////////////
//  RUT-SOM-DATA-PT-06-2020-U-C                                                   Douglas High //
//   javaScript-Challenge                                                   September 21, 2020 //
//      >UFO-level-2//app.js                                                                   //
//   - load html table from data file.                                                         //
//   - provide user input boxes for filtering criteria, produce filtered data to html table.   //
/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//00      I/O                                   //
//   - associate input data to tableData.       //
//   - create html association variables.       //
//   - event handlers for html tag variables.   //
//////////////////////////////////////////////////

var tableData = data;

var tableBody = d3.select("tbody");
var button = d3.select("#filter-btn");
var dateIn = d3.select("#datetime");
var cityIn = d3.select("#city");
var stateIn = d3.select("#state");
var countryIn = d3.select("#country");
var shapeIn = d3.select("#shape");

button.on("click", getData);
dateIn.on("submit", getData);
cityIn.on("submit", getData);
stateIn.on("submit", getData);
countryIn.on("submit", getData);
shapeIn.on("submit", getData);

////////////////////////////////////////
//01     Table Load                   //
//   - load tableData to html page.   //
////////////////////////////////////////

tableData.forEach((record) => {
  var row = tableBody.append("tr");

  Object.entries(record).forEach(([, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});

/////////////////////////////////////////////////////////////////////////
//02     Get Data Function                                             //
//   - set variables to user inputs and convert input to lower case.   //
//   - check all input fields for not empty.                           //
//   - apply filters for all user inputs.                              //
//   - clear out and reload html table.                                //
/////////////////////////////////////////////////////////////////////////

function getData() {
  d3.event.preventDefault();
  
  var filteredData = tableData;

  var dateSelect = dateIn.property("value");
  var citySelect = cityIn.property("value").toLowerCase();
  var stateSelect = stateIn.property("value").toLowerCase();
  var countrySelect = countryIn.property("value").toLowerCase();
  var shapeSelect = shapeIn.property("value").toLowerCase();
  
  if (dateSelect !== ""){
    filteredData = filteredData.filter(input => input.datetime === dateSelect);
  }
  if (citySelect !== ""){
    filteredData = filteredData.filter(input => input.city === citySelect);
  }
  if (stateSelect !== ""){
    filteredData = filteredData.filter(input => input.state === stateSelect);
  }
  if (countrySelect !== ""){
    filteredData = filteredData.filter(input => input.country === countrySelect);
  }
  if (shapeSelect !== ""){
    filteredData = filteredData.filter(input => input.shape === shapeSelect);
  }

  tableBody.html("")
  filteredData.forEach((record) => {
    var row = tableBody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}