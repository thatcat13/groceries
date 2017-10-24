$(document).ready(function() {
  $("form#groceryList").submit(function(event) {
  event.preventDefault();
  var groceries = ["groc1", "groc2", "groc"];
  var arrayedGroceries = [];
  groceries.forEach(function(food) {
    var items = $("input#" + food).val();
    arrayedGroceries.push(items);
    });

  var upperArray = arrayedGroceries.map(function(stuff) {
    return stuff.toUpperCase();
  });

  upperArray.forEach(function(li) {
    $("#theList").prepend("<li>" + li + "</li>");
  });
});
});
