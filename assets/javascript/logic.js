$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav(); 
});

$(document).ready(function() {
  $('#button').click(connectDb);
});

function connectDb() {
   //Pulling data from TheMealDB API
  const queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  $.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  renderDrinks(response)
  })
};

function renderDrinks(response) {
  // Render to HTML
    let drink = response.drinks[0];
    let drinkDiv = document.getElementById("cocktailView");

    // Output the data - name
    let drinkName = drink.strDrink;
    let heading = document.createElement("h3");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    // Outout the data - image
    let drinkImage = document.createElement("img");
    drinkImage.src = drink.strDrinkThumb;
    drinkDiv.appendChild(drinkImage);

    
    renderIngr(drink, drinkDiv);
};

function renderIngr (drink, drinkDiv) {
  let drinkIngr = drink.strIngredient1;
  let drinkMsr = drink.strMeasure1;
  let ingrOne = document.createElement("li");
  let msrOne = document.createElement("li")
  ingrOne.innerHTML = drinkIngr;
  msrOne.innerHTML = drinkMsr;
  if( drinkIngr !== 'null' ) {
    drinkDiv.appendChild(ingrOne);
    drinkDiv.appendChild(msrOne);
    }
}



//     //Output the data - ingredients - loop through and select only those without null
//     const ingredients = drink.strIngredient2;
//     console.log (ingredients);
//     })
//   });
// })();
