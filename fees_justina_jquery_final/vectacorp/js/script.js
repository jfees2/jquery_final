//PART ONE VECTACORP
jQuery(document).ready(function () {
    $("h2").css({"border": "solid black 1px", "border-radius": "0 5px", "color": "#CC1C0D", "padding": "3px 0 3px 20px", "background-color": "#DFE3E6"});
    
    $("li a").addClass("navigation");
    
    $(".navigation").css({"border": "solid #929CA4 1px", "color": "#CC1C0D", "padding": "3px 0 3px 20px", "background-color": "#DFE3E6"});
    
    $("p.vprospect").removeClass("vprospect");
    $("p.vconvert").removeClass("vconvert");
    $("p.vretain").removeClass("vretain");
    
    $("aside > p:nth-child(3)").append("<br> Chevy Dealers Association");
    
    $("aside > p:nth-child(2)").wrapInner("<q></q>");
    
    $("aside > p:nth-child(2)").css({"font-style": "italic"});
    
   $("section > p:nth-child(2) > b").wrap("<a href='http://www.vectacorp.com'/>");
    
}); //end document ready function

 