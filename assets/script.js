// Global Variables //
var id = "b9d38e41"
var key = "99baeb4e4004a0a6ff8f6200b4b90779"


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
        }


        // Page scroll animaton //
        // $("html, body").animate({ scrollTop: "700px" }, 1000);

        // // Random drink selection //
        // var rand = Math.floor((Math.random() * response.drinks.length));
        // console.log(response.drinks.length);
        // $(".drinkCard-title").html(response.drinks[rand].strDrink);
        // $(".drinkCard-img-top").attr("src", response.drinks[rand].strDrinkThumb);
        // var drinkId = (response.drinks[rand].idDrink);
        // console.log(drinkId);


     // Styling the drink card //
    //  $(".drinkCard").css("border", "1px solid black");
    //  $(".drinkCard").css("border-radius", ".25rem");
    //  $(".drinkCard").css("border", "1px solid rgba(0,0,0,.125)");
    //  $(".drinkCard").css("background-color", "#fff");
    //  $(".drinkCard").css("display", "flex");
    //  $(".drinkCard").css("background-clip", "border-box");
    //  $(".drinkCard").css("word-wrap", "break-word");
    //  $(".drinkCard").css("flex-direction", "column");
    //  $(".drinkCard").css("border", "1px solid black");
    //  $(".drinkCard").css("padding", "20px");

     //Cocktail db URL referencing the drink id from previous call //
    //  var queryURLid = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;

    //  // AJAX call for drink ingredients, unit of measure, and recipe //
    //  $.ajax({
    //      type: "GET",
    //      url: queryURLid,
    //  }).then(function(response) {
    //      console.log(queryURLid);
    //      console.log(response);
    //      $(".drinkCard-text").empty();
    //      var list = $("<ul>");
    //      $(".drinkCard-text").append(list);

    //      // for loop looping thorugh and appending each drink unit of measure and ingredient //
    //      for (var i = 1; i < 16; i++) {
    //          var item = $("<li>")
    //          ingredient = response.drinks[0]["strIngredient" + i];
    //          unit = response.drinks[0]["strMeasure" + i];
    //          if (ingredient){
    //              item.html(unit + " " + ingredient);
    //              list.append(item)
    //          }
    //      } 
         
    //      // Get the drink instructions and append them to the drink card //
    //      var p = $("<p>");
    //      p.html("<h5>Instructions:</h5> \n" + response.drinks[0].strInstructions);
    //      $(".drinkCard-text").append(p);
    //     });
    });
    
}

function createCard() {
   var div = document.createElement("div"); 
   var h5 = document.createElement("h5");
    var img = document.createElement("img");
   var p = document.createElement("p");

}


// Function to all the drink function on click of "Beverage"
$(function(){
    $('#saveDrink').click(function(){
        getDrink();
        $('.modal').modal();
        $('.modal').modal("open");
    });
});




