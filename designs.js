// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Your code goes here!

var height, width, color, grid;

$('#sizePicker').submit(function makeGrid(grid) {
    $("table tr").remove();// this helps to prevent the table content from adding at each submit
    height = $("#inputHeight").val(); //this indicates the height of the grid, depending on what number User chooses.
    width =  $("#inputWidth").val();  //this indicates the width of the grid, depending on what number User chooses.
    //This is a nested for loop that creates the grid
    for (var i = 1; i <= height; i++) {
     $('table').append("<tr></tr>");
     for (var j = 1; j <= width; j++) {
      $('tr:last').append("<td></td>");
      $('td').attr("class", 'cells');
     }
    }
    grid.preventDefault();
 
    //since .cell class was created in the <td> we'll add a click event which picks the value of color User picks. 
  $('.cells').click(function (event) {  
       var  color = $('#colorPicker').val();
         console.log(color);
    $(event.target).css('background', color);
  });
});
