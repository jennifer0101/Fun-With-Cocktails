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

  // Output the data - alcoholic/non
  let drinkAlco = drink.strAlcoholic;

  // Output the data - glass
  let drinkGlass = drink.strGlass;

  //Render alcoholic and glass to html 
  let alcoGlass = ("This is an" + " " + drinkAlco + " " + "drink using a" + " " + drinkGlass + ".")
  let glassAlco = document.createElement("p");
  glassAlco.innerHTML = alcoGlass;
  drinkDiv.appendChild(glassAlco);

  // Outout the data - image
  let drinkImage = document.createElement("img");
  drinkImage.src = drink.strDrinkThumb;
  drinkDiv.appendChild(drinkImage);

  // Output the data - instructions
  let drinkInstr = drink.strInstructions;
  let howTo = document.createElement("p");
  howTo.innerHTML = drinkInstr;
  drinkDiv.appendChild(howTo);

  renderIngrs (drink, drinkDiv);
};

function renderIngrs (drink, drinkDiv){

  let drinkIngr1 = drink.strIngredient1;
  let drinkMsr1 = drink.strMeasure1;
 
  let drinkIngr2 = drink.strIngredient2;
  let drinkMsr2 = drink.strMeasure2;
  
  let drinkIngr3 = drink.strIngredient3;
  let drinkMsr3 = drink.strMeasure3;
  
  let drinkIngr4 = drink.strIngredient4;
  let drinkMsr4 = drink.strMeasure4;

  let drinkIngr5 = drink.strIngredient5;
  let drinkMsr5 = drink.strMeasure5;

  let drinkIngr6 = drink.strIngredient6;
  let drinkMsr6 = drink.strMeasure6;

  let drinkIngr7 = drink.strIngredient7;
  let drinkMsr7 = drink.strMeasure7;

  let drinkIngr8 = drink.strIngredient8;
  let drinkMsr8 = drink.strMeasure8;

  let drinkIngr9 = drink.strIngredient9;
  let drinkMsr9 = drink.strMeasure9;

  let drinkIngr10 = drink.strIngredient10;
  let drinkMsr10 = drink.strMeasure10;

  let drinkIngr11 = drink.strIngredient11;
  let drinkMsr11 = drink.strMeasure11;

  let drinkIngr12 = drink.strIngredient12;
  let drinkMsr12 = drink.strMeasure12;

  let drinkIngr13 = drink.strIngredient13;
  let drinkMsr13 = drink.strMeasure13;

  let drinkIngr14 = drink.strIngredient14;
  let drinkMsr14 = drink.strMeasure14;

  let drinkIngr15 = drink.strIngredient15;
  let drinkMsr15 = drink.strMeasure15;

  const allIngr = [
    drinkMsr1,
    drinkIngr1, 
    drinkMsr2,
    drinkIngr2, 
    drinkMsr3,
    drinkIngr3, 
    drinkMsr4,
    drinkIngr4, 
    drinkMsr5,
    drinkIngr5, 
    drinkMsr6,
    drinkIngr6, 
    drinkMsr7,
    drinkIngr7, 
    drinkMsr8,
    drinkIngr8, 
    drinkMsr9,
    drinkIngr9, 
    drinkMsr10,
    drinkIngr10, 
    drinkMsr11,
    drinkIngr11, 
    drinkMsr12,
    drinkIngr12, 
    drinkMsr13,
    drinkIngr13,
    drinkMsr14,
    drinkIngr14, 
    drinkMsr15,
    drinkIngr15
  ];

  // Output the data - measurements, ingredients
  $.each(allIngr, function(index, value){ 
    if (value !== null) {
    } 
    console.log(value) 
    let item = document.createElement("ol");
    item.innerHTML=value;
    drinkDiv.appendChild(item);
  });
}