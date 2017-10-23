$(document).ready(function(event) {
  event.preventDefault();
  $("form#groceryList").submit(function() {
    var grocArray = ["groc1", "groc2", "groc"];
    var forArray = [];
    grocArray.forEach(function(food) {
      var items = $("input#" + food).val();
      return forArray;
      alert(forArray);



    });

  });
});
