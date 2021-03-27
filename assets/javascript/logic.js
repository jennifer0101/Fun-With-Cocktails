$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.carousel').carousel();
  $('.sidenav').sidenav(); 
  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);
});

// fetch request
// fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//   .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("NETWORK RESPONSE NOT OK");
//       }
//       })
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("FETCH ERROR:", error);
//       });




// Pulling data from TheMealDB API
const queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  // Render to HTML
  const drink = response.drinks[0];
  const drinkDiv= document.getElementById("cocktailView");

  // Output the data - name
  const drinkName= drink.strCategory;
  const heading = document.createElement("h3");
  heading.innerHTML = drinkName;
  drinkDiv.appendChild(heading);

  // Outout the data - image
  const drinkImage = document.createElement("img");
  drinkImage.src = drink.strDrinkThumb;
  drinkDiv.appendChild(drinkImage);

  //Output the data - description
  // const drinkIngredients = food.strCategoryDescription;
  // const info = document.createElement("p");
  // info.innerHTML = foodDescrip;
  // foodDiv.appendChild(info);
})

