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

    
    renderIngrs(drink, drinkDiv);
};

var caption;

// if(photo.caption != null) { // Covers 'undefined' as well
//   caption = photo.caption.text;
// } else {
//   caption = "meh";
// }

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
    drinkIngr1, 
    drinkMsr1,
    drinkIngr2, 
    drinkMsr2,
    drinkIngr3, 
    drinkMsr3,
    drinkIngr4, 
    drinkMsr4,
    drinkIngr5, 
    drinkMsr5,
    drinkIngr6, 
    drinkMsr6,
    drinkIngr7, 
    drinkMsr7,
    drinkIngr8, 
    drinkMsr8,
    drinkIngr9, 
    drinkMsr9,
    drinkIngr10, 
    drinkMsr10,
    drinkIngr11, 
    drinkMsr11,
    drinkIngr12, 
    drinkMsr12,
    drinkIngr13,
    drinkMsr13,
    drinkIngr14, 
    drinkMsr14,
    drinkIngr15,
    drinkMsr15
  ];

  $.each(allIngr, function(index, value){ 
    if (value !== null) {
    } else {return false};
    console.log(value) 
    let item = document.createElement("li");
    item.innerHTML=value;
    drinkDiv.appendChild(item);
  });

  // let msrIngr1 = (drinkMsr1 + " " + drinkIngr1);
  // let item1 = document.createElement("li");
  // item1.innerHTML = msrIngr1;
  // drinkDiv.appendChild(item1);

  // let msrIngr15 = (drinkMsr15 + " " + drinkIngr15);
  // let item15 = document.createElement("li");
  // item15.innerHTML = msrIngr15;
  // drinkDiv.appendChild(item15);


}





// function renderIngrs (drink, drinkDiv) {
//   let drinkIngr1 = drink.strIngredient1;
//   let drinkMsr1 = drink.strMeasure1;

//   if(drinkIngr1 !== 'null') {
//     let msrIngr1 = (drinkMsr1 + " " + drinkIngr1);
//     let item1 = document.createElement("li");
//     item1.innerHTML = msrIngr1;
//     drinkDiv.appendChild(item1);
//   } 

//   let drinkIngr2 = drink.strIngredient2;
//   let drinkMsr2 = drink.strMeasure2;

//   if(drinkIngr2 !== 'null') {
//     let msrIngr2 = (drinkMsr2 + " " + drinkIngr2);
//     let item2 = document.createElement("li");
//     item2.innerHTML = msrIngr2;
//     drinkDiv.appendChild(item2);
//     } 

//   let drinkIngr3 = drink.strIngredient3;
//   let drinkMsr3 = drink.strMeasure3;

//   if(drinkIngr3 !== 'null') {
//     let msrIngr3 = (drinkMsr3 + " " + drinkIngr3);
//     let item3 = document.createElement("li");
//     item3.innerHTML = msrIngr3;
//     drinkDiv.appendChild(item3);
//     } 

//   let drinkIngr4 = drink.strIngredient4;
//   let drinkMsr4 = drink.strMeasure4;

//   if(drinkIngr4 !== 'null') {
//     let msrIngr4 = (drinkMsr4 + " " + drinkIngr4);
//     let item4 = document.createElement("li");
//     item4.innerHTML = msrIngr4;
//     drinkDiv.appendChild(item4);
//     } 

  // let drinkIngr5 = drink.strIngredient5;
  // let drinkMsr5 = drink.strMeasure5;

  // if(drinkIngr5 !== 'null') {
  //   let msrIngr5 = (drinkMsr5 + " " + drinkIngr5);
  //   let item5 = document.createElement("li");
  //   item5.innerHTML = msrIngr5;
  //   drinkDiv.appendChild(item5);
  //   } else {
      
  //   }

  // let drinkIngr6 = drink.strIngredient6;
  // let drinkMsr6 = drink.strMeasure6;

  // if(drinkIngr6 !== 'null') {
  //   let msrIngr6 = (drinkMsr6 + " " + drinkIngr6);
  //   let item6 = document.createElement("li");
  //   item6.innerHTML = msrIngr6;
  //   drinkDiv.appendChild(item6);
  //   } 

  // let drinkIngr7 = drink.strIngredient7;
  // let drinkMsr7 = drink.strMeasure7;

  // if(drinkIngr7 !== 'null') {
  //   let msrIngr7 = (drinkMsr7 + " " + drinkIngr7);
  //   let item7 = document.createElement("li");
  //   item7.innerHTML = msrIngr7;
  //   drinkDiv.appendChild(item7);
  //   } 

  // let drinkIngr8 = drink.strIngredient8;
  // let drinkMsr8 = drink.strMeasure8;

  // if(drinkIngr8 !== 'null') {
  //   let msrIngr8 = (drinkMsr8 + " " + drinkIngr8);
  //   let item8 = document.createElement("li");
  //   item8.innerHTML = msrIngr8;
  //   drinkDiv.appendChild(item8);
  //   } 

//   let drinkIngr9 = drink.strIngredient9;
//   let drinkMsr9 = drink.strMeasure9;

//   if(drinkIngr9 !== 'null') {
//     let msrIngr9 = (drinkMsr9 + " " + drinkIngr9);
//     let item9 = document.createElement("li");
//     item9.innerHTML = msrIngr9;
//     drinkDiv.appendChild(item9);
//     } 

//   let drinkIngr10 = drink.strIngredient10;
//   let drinkMsr10 = drink.strMeasure10;

//   if(drinkIngr10 !== 'null') {
//     let msrIngr10 = (drinkMsr10 + " " + drinkIngr10);
//     let item10 = document.createElement("li");
//     item10.innerHTML = msrIngr10;
//     drinkDiv.appendChild(item10);
//     } 

//   let drinkIngr11 = drink.strIngredient11;
//   let drinkMsr11 = drink.strMeasure11;

//   if(drinkIngr11 !== 'null') {
//     let msrIngr11 = (drinkMsr11 + " " + drinkIngr11);
//     let item11 = document.createElement("li");
//     item11.innerHTML = msrIngr11;
//     drinkDiv.appendChild(item11);
//     } 

//   let drinkIngr12 = drink.strIngredient12;
//   let drinkMsr12 = drink.strMeasure12;

//   if(drinkIngr12 !== 'null') {
//     let msrIngr12 = (drinkMsr12 + " " + drinkIngr12);
//     let item12 = document.createElement("li");
//     item12.innerHTML = msrIngr12;
//     drinkDiv.appendChild(item12);
//     } 

//   let drinkIngr13 = drink.strIngredient13;
//   let drinkMsr13 = drink.strMeasure13;

//   if(drinkIngr13 !== 'null') {
//     let msrIngr13 = (drinkMsr13 + " " + drinkIngr13);
//     let item13 = document.createElement("li");
//     item13.innerHTML = msrIngr13;
//     drinkDiv.appendChild(item13);
//     } 

//   let drinkIngr14 = drink.strIngredient14;
//   let drinkMsr14 = drink.strMeasure14;

//   if(drinkIngr14 !== 'null') {
//     let msrIngr14 = (drinkMsr14 + " " + drinkIngr14);
//     let item14 = document.createElement("li");
//     item14.innerHTML = msrIngr14;
//     drinkDiv.appendChild(item14);
//     } 

//   let drinkIngr15 = drink.strIngredient15;
//   let drinkMsr15 = drink.strMeasure15;

//   if(drinkIngr15 !== 'null') {
//     let msrIngr15 = (drinkMsr15 + " " + drinkIngr15);
//     let item15 = document.createElement("li");
//     item15.innerHTML = msrIngr15;
//     drinkDiv.appendChild(item15);
   
// }
// }
