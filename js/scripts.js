$(document).ready(function(){
      // show the crust  div when hidden
      $("#crust").click(function(){
        $("#initiallyHidden1").hide();
        $("#initiallyHidden2").hide();
        $("#stuffed").removeClass("active");
        $("#gluten").removeClass("active");
        $("#crust").addClass("active");
        $("#initiallyShown").show();
    })
    // show the stuffed hidden div
    $("#stuffed").click(function(){
        $("#initiallyShown").hide();
        $("#initiallyHidden2").hide();
        $("#crust").removeClass("active");
        $("#gluten").removeClass("active");
        $("#stuffed").addClass("active");
        $("#initiallyHidden1").show();
    })
    // show the glutten free hidden div
    $("#gluten").click(function(){
        $("#initiallyShown").hide();
        $("#initiallyHidden1").hide();
        $("#crust").removeClass("active");
        $("#stuffed").removeClass("active");
        $("#gluten").addClass("active");
        $("#initiallyHidden2").show();
    }) 
//      // collect prices of chosen pizza
//         var pizzaPrice = "";
//         var selected = $("input[type='radio'][name='customRadio']:checked");
//         if (selected.length > 0) {
//             pizzaPrice = parseInt(selected.val());
//         document.getElementById("sizeOutput").innerHTML = pizzaPrice;
//     } 
//        // collect prices of crust pizza
//        var crustPrice = "";
//        var selected = $("input[type='radio'][name='customRadioInline1']:checked");
//        if (selected.length > 0) {
//            crustPrice = parseInt(selected.val());
//        document.getElementById("crustOutput").innerHTML = crustPrice;
//    }

//  end of jQury document
})

    function myFunction() {
        // price of Large pizza 
        var largePizza = document.getElementById("customRadio1").checked;
        if(largePizza === true){
            largePizza = 1000
            // document.getElementById("demo").innerHTML = ;
        }
        // price of Large pizza 
        var mediumPizza = document.getElementById("customRadio2").checked;
        if(mediumPizza === true){
            mediumPizza = 900
            // document.getElementById("demo").innerHTML = ;
        }
        // price of Large pizza 
        var smallPizza = document.getElementById("customRadio3").checked;
        if(smallPizza === true){
            smallPizza = 800
            // document.getElementById("demo").innerHTML = ;
        }
//********************************************************************** */
        // price of crispy crust
        var crispyCrust = document.getElementById("customRadioInline1").checked;
        if(crispyCrust === true){
            crispyCrust = 250
            // document.getElementById("demo").innerHTML = ;
        }
        //price of stuffed crust
        var stuffedCrust = document.getElementById("customRadioInline2").checked;
        if(stuffedCrust === true){
            stuffedCrust = 200
            // document.getElementById("demo").innerHTML = ;
        }
        //price of glutten crust
        var gluttenCrust = document.getElementById("customRadioInline3").checked;
        if(gluttenCrust === true){
            gluttenCrust = 150
            // document.getElementById("demo").innerHTML = ;
        }
// *******************************************************************
        // price of bacon
        var bacon = document.getElementById("customCheck1").checked;
        if(bacon === true){
            bacon = 100
            myBacon = "Bacon"
            // document.getElementById("demo").innerHTML = bacon;
        }
        // price of basil
        var basil = document.getElementById("customCheck2").checked;
        if(basil === true){
            basil = 90
            myBasil = "Basil"
            // document.getElementById("demo").innerHTML = basil;
        }
        // price of mushroom
        var mushroom = document.getElementById("customCheck3").checked;
        if(mushroom === true){
            mushroom = 80
            myMushroom = "Mushroom"
            // document.getElementById("demo").innerHTML = mushroom;
        }
        // price of peppers
        var peppers = document.getElementById("customCheck4").checked;
        if(peppers === true){
            peppers = 70
            myPeppers = "Peppers"
            // document.getElementById("demo").innerHTML = peppers;
        }
        // price of pesto
        var pesto = document.getElementById("customCheck5").checked;
         if(pesto === true){
            pesto = 60
            myPesto = "Pesto"
            //  document.getElementById("demo").innerHTML = pesto;
         }
        // price of pineaple
        var pineaple = document.getElementById("customCheck6").checked;
        if(pineaple === true){
            pineaple = 50
            myPineaple = "Pineaple"
            // document.getElementById("demo").innerHTML = pineaple;
        }
        //compile total cost of toppings
        var pizzaPrice = largePizza +mediumPizza +smallPizza;
        document.getElementById("pizzaCost").innerHTML = "$ "+ pizzaPrice; //append pizza price to the table
        var crustPice = crispyCrust +  stuffedCrust + gluttenCrust;
        document.getElementById("crustCost").innerHTML = "$ "+ crustPice; //append crust price to the table
        var toppingsPrice = bacon + basil + mushroom + peppers + pesto + pineaple;
        document.getElementById("costOfToppings").innerHTML = "$ "+ toppingsPrice; //append toppings price to the table
        var totalCost = pizzaPrice + crustPice + toppingsPrice; 
        document.getElementById("totalCost").innerHTML = "$ "+ totalCost; //append total price to the table
        // determine size of pizza 
        if(pizzaPrice ==1000){
            document.getElementById("pizzaSize").innerHTML = "Large Pizza"
        }else if(pizzaPrice==900){
            document.getElementById("pizzaSize").innerHTML = "Medium Pizza"
        }else{
            document.getElementById("pizzaSize").innerHTML = "Small Pizza"
        }
        // Determine type of crust
        if(crustPice ==250){
            document.getElementById("typeOfCrust").innerHTML = " Crispy Crust"
        }else if(crustPice==200){
            document.getElementById("typeOfCrust").innerHTML = "Stuffed Crust"
        }else{
            document.getElementById("typeOfCrust").innerHTML = "Glutten-free Crust"
        }
        // Determine the selected toppings
        var myBacon,myBasil,myMushroom,myPeppers,myPesto,myPineaple
        if(bacon == 100){
             myBacon = "Bacon "
        }else {
             myBacon = " "
        }
         if(basil == 90){
             myBasil = "Basil "
        }else{
             myBasil = " "
        }
         if(mushroom == 80){
             myMushroom = "Mushroom "
        }else {
             myMushroom = " "
        }
         if(peppers == 70){
             myPeppers = "Peppers "
        }else {
             myPeppers = " "  
        }
        if(pesto == 60){
             myPesto = "Pesto "
        }else {
            myPesto = " "
        } if(pineaple == 50){
             myPineaple = "Pineaple "
        }else {
            myPineaple = " "
        }
        var allToppings = myBacon + myBasil + myMushroom + myPeppers + myPesto + myPineaple;
        document.getElementById("typesOfToppings").innerHTML = allToppings;



        document.getElementById("demo").innerHTML = totalCost;
    }