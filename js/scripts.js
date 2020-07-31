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
})