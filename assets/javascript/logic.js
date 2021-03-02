$(document).ready()


$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/categories.php",
  method: "GET"
}).then(function(response) {
  console.log(response);
});

