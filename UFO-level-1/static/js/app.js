/////////////////////////////////////////////////////////////////////////////////////////////////
//  RUT-SOM-DATA-PT-06-2020-U-C                                                   Douglas High //
//   javaScript-Challenge                                                   September 21, 2020 //
//      >UFO-level-1//app.js                                                                   //
//   - load html table from data file.                                                         //
//   - provide user input box and filtering by date, produce filtered data to html table.      //
/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//00     I/O                                    //
//   - associate input data to tableData.       //
//   - create html association variables.       //
//   - event handlers for html tag variables.   //
//////////////////////////////////////////////////

const tableData = data;

var tableBody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

button.on("click", getData);
form.on("submit", getData);

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

//////////////////////////////////////////////////////
//02     Get Data Function                          //
//   - get date value from user input.              //
//   - filter data based on date entered by user.   //
//   - clear out and reload html table.             //
//////////////////////////////////////////////////////

function getData() {
  d3.event.preventDefault();
  
  var userDate = form.property("value");
  
  var filteredData = tableData.filter(inputDate => inputDate.datetime === userDate);
    
  tableBody.html("")
  filteredData.forEach((record) => {
    var row = tableBody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}