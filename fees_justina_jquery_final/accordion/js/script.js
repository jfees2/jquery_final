$(document).ready(function () {
    $(".accordion").on("click", function() {
        $(".content").hide();
        $(this).find(".content").show();
    });
});




/*$(document).ready(function () {
    function closeAccord () {
    $(".accordion .accord-section-content").removeClass("active");
    $(".accordion .accord-section-content").slideUp(300).removeClass("open");
    }
    $(".accord-title").click(function(e) {
        
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');
    if ($(e.target).is(".active")) {
    closeAccord();
    } else {
    closeAccord();
        
    // Add active class to section title
    $(this).addClass('active');
    // Open up the hidden content panel
    $(".accordion" + currentAttrValue).slideDown(300).addClass("open");
    }
    e.preventDefault();
    });
});*/