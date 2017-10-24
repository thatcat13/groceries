$(document).ready(function() {
  $("form#groceryList").submit(function(event) {
  event.preventDefault();
  var groceries = ["groc1", "groc2", "groc3"];
  var arrayedGroceries = [];
  groceries.forEach(function(food) {
    var items = $("input#" + food).val();
    arrayedGroceries.push(items);
    });

  var upperArray = arrayedGroceries.map(function(stuff) {
    stuff= stuff.toUpperCase();
    return stuff;
  });

  upperArray.sort();
  upperArray.forEach(function(li) {
    $("#theList").append("<li>" + li + "</li>");
  });
});
});
