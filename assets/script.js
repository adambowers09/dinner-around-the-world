


// Drink Function //
function getDrink() {
    var drinkSelection = $("input[name=Random-Beverage]:checked").val();
    console.log(drinkSelection);

    var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSelection;

    //AJAX call getting each drink name, image, and drink id //
    $.ajax({
        type: "GET",
        url: queryURLdrink,
    }).then(function(response) {
        // console.log(queryURLdrink);
        // console.log(response.drinks);

        for (let index = 0; index < response.drinks.length; index++) {
            const element = response.drinks[index];
            
            const drink = {
                drink: element.strDrink, 
                image: element.strDrinkThumb,
                instructions: element.strInstructions,
                
            }
            console.log(drink)
            createCard(drink.drink, drink.image, drink.instructions);
        }

    });
    
}
// A reusable function to create a card that renders information about a drink that will be used in a for loop for each
// element in the data array. 
var modal = document.querySelector(".modal-content");
function createCard(title, image, instructions) {
   var div = document.createElement("div"); 
   var h5 = document.createElement("h2");
    var img = document.createElement("img");
   var p = document.createElement("p");

// creaated classes for each element so you can grab them later to be able to clear the modal with the clearCard function
   h5.setAttribute("class", "drink-title");
   img.setAttribute("class", "drink-img");
   p.setAttribute("class", "drinkIns");
    div.setAttribute("class", "drinkCard");
    img.setAttribute("class", "drinkCard-img-top");

    // made each element a child of the created div with class of drinkCard
   div.appendChild(img);
   div.appendChild(h5);
   div.appendChild(p);
    img.setAttribute("src", image);
    h5.textContent = title;
    p.textContent = instructions;
    modal.appendChild(div);
}


// Function to all the drink function on click of "Beverage"
$(function(){
    $('#saveDrink').click(function(){
        getDrink();
        $('.modal').modal();
        $('.modal').modal("open");
    });
});
// this function will clear history after you make your drink selection  
// var children = document.getElementsByClassName("drinkCard");
function clearCard() {
    modal.innerHTML = "";

    // var children = document.getElementsByClassName("drinkCard");
    // for (let index = 0; index < children.length; index++) {
    //     modal.removeChild(children[index]);
    //     console.log(children[index])

        
//     }
//     console.log(children)
}
// this function will activate and clear history
$(function(){
    $('.modal-close').click(function(){
        clearCard();
        
    });
});


var id = "b9d38e41"
var key = "99baeb4e4004a0a6ff8f6200b4b90779"
const foodURL = "https://api.edamam.com/api/recipes/v2?type=public&q=";
const appIDKey = "&app_id=b9d38e41&app_key=99baeb4e4004a0a6ff8f6200b4b90779";

function getRecipe() {
    var ingredient = $("input[name=food]:checked").val();

    $.ajax({
        type: "GET",
        url: foodURL + ingredient + appIDKey,
    }).then(function(response) {
        
        for (let index = 0; index < response.food.length; index++) {
            const element = response.hits[index];
            
            const recipe = {
                recipe: element.labelRecipe, 
                image: element.imageRecipe,
                instructions: element.labelIngrdients,
                
            }
            console.log(Recipe)
            createCard(food.recipe, food.image, food.ingredients);
        }

    });
        

}

// A reusable function to create a card that renders information about a recipe that will be used in a for loop for each
// element in the data array. 
var modal = document.querySelector(".modal-content");
function createCard(title, image, instructions) {
   var div = document.createElement("div"); 
   var h5 = document.createElement("h2");
    var img = document.createElement("img");
   var p = document.createElement("p");

// creaated classes for each element so you can grab them later to be able to clear the modal with the clearCard function
   h5.setAttribute("class", "recipe-title");
   img.setAttribute("class", "recipe-img");
   p.setAttribute("class", "recipeIns");
    div.setAttribute("class", "recipeCard");
    img.setAttribute("class", "recipeCard-img-top");

    // made each element a child of the created div with class of recipeCard
   div.appendChild(img);
   div.appendChild(h5);
   div.appendChild(p);
    img.setAttribute("src", image);
    h5.textContent = title;
    p.textContent = instructions;
    modal.appendChild(div);
}


// Function to all the recipe function on click of "Beverage"
$(function(){
    $('#saveRecipe').click(function(){
        getRecipe();
        $('.modal').modal();
        $('.modal').modal("open");
    });
});
// this function will clear history after you make your recipe selection  
// var children = document.getElementsByClassName("recipeCard");
function clearCard() {
    modal.innerHTML = "";

    // var children = document.getElementsByClassName("recipeCard");
    // for (let index = 0; index < children.length; index++) {
    //     modal.removeChild(children[index]);
    //     console.log(children[index])

        
//     }
//     console.log(children)
}
// this function will activate and clear history
$(function(){
    $('.modal-close').click(function(){
        clearCard();
        
    });
});