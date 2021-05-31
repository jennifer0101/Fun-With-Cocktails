$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav(); 
});

(function clickMe() {
  const button = document.getElementById("button");
  button.addEventListener("click", event => {
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
    const drinkName= drink.strDrink;
    const heading = document.createElement("h3");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    // Outout the data - image
    const drinkImage = document.createElement("img");
    drinkImage.src = drink.strDrinkThumb;
    drinkDiv.appendChild(drinkImage);

    //Output the data - ingredients - loop through and select only those without null
  
    })
  });
})();


