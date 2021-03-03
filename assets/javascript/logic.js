$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.carousel').carousel();
  $('.sidenav').sidenav(); 
  // $('.tooltipped').tooltip();
  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);
});


// Pulling data from TheMealDB API
const queryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  // Render to HTML
  const food = response.categories[2];
  const foodDiv= document.getElementById("foodView");

  // Output the data - name
  const foodName= food.strCategory;
  const heading = document.createElement("h3");
  heading.innerHTML = foodName;
  foodDiv.appendChild(heading);

  // Outout the data - image
  const foodImage = document.createElement("img");
  foodImage.src = food.strCategoryThumb;
  foodDiv.appendChild(foodImage);

  //Output the data - description
  const foodDescrip = food.strCategoryDescription;
  const info = document.createElement("h6");
  info.innerHTML = foodDescrip;
  foodDiv.appendChild(info);
})