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
     // collect prices of chosen pizza
        var pizzaPrice = "";
        var selected = $("input[type='radio'][name='customRadio']:checked");
        if (selected.length > 0) {
            pizzaPrice = parseInt(selected.val());
        document.getElementById("sizeOutput").innerHTML = pizzaPrice;
    } 
       // collect prices of crust pizza
       var crustPrice = "";
       var selected = $("input[type='radio'][name='customRadioInline1']:checked");
       if (selected.length > 0) {
           crustPrice = parseInt(selected.val());
       document.getElementById("crustOutput").innerHTML = crustPrice;
   }
        //    collect prices for toppings
        // $("#order").click(function(){
        //     var x = parseInt($("customCheck6").val());
        //     document.getElementById("demo").innerHTML = x;
        // })
        

//  end of jQury document
})

    function myFunction() {
        // price of bacon
        var bacon = document.getElementById("customCheck1").checked;
        if(bacon === true){
            bacon = 100
            // document.getElementById("demo").innerHTML = bacon;
        }
        // price of basil
        var basil = document.getElementById("customCheck2").checked;
        if(basil === true){
            basil = 90
            // document.getElementById("demo").innerHTML = basil;
        }
        // price of mushroom
        var mushroom = document.getElementById("customCheck3").checked;
        if(mushroom === true){
            mushroom = 80
            // document.getElementById("demo").innerHTML = mushroom;
        }
        // price of peppers
        var peppers = document.getElementById("customCheck4").checked;
        if(peppers === true){
            peppers = 70
            // document.getElementById("demo").innerHTML = peppers;
        }
         // price of pesto
         var pesto = document.getElementById("customCheck5").checked;
         if(pesto === true){
            pesto = 60
            //  document.getElementById("demo").innerHTML = pesto;
         }
        // price of pineaple
            var pineaple = document.getElementById("customCheck6").checked;
            if(pineaple === true){
                pineaple = 50
                // document.getElementById("demo").innerHTML = pineaple;
            }

            var toppingsPrice = bacon +basil+mushroom+peppers+pesto+pineaple;
            document.getElementById("demo").innerHTML = toppingsPrice;

    }