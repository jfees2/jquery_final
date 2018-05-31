$(function() {

var slides = $(".slider ul");
var slideCount = slides.children().length;
var slideWidth = 100.0 / slideCount;
var slideIndex = 0;

slides.find("li").each(function(indx) {
var left_percent = (slideWidth * indx) + "%";
$(this).css({"left":left_percent});
$(this).css({width:(100 / slideCount) + "%"});
});

// Listen for click of prev button
$(".slider .prev").click(function() {

slide(slideIndex - 1);
});

// Listen for click of next button
$(".slider .next").click(function() {

slide(slideIndex + 1);
});

function slide(newSlideIndex) {

if(newSlideIndex < 0 || newSlideIndex >= slideCount) return; 

var margin_left_pc = (newSlideIndex * (-100)) + "%";

slides.animate({"margin-left": margin_left_pc}, 400, function() {

slideIndex = newSlideIndex

});

}

});

//fadein? http://jsfiddle.net/benjaminthomas/8syd2e3f/
 /*   
$(".nav ul li").click(function () {
    var index = $(this).index();
    $(this).addClass("current").siblings().removeClass("current");
    $(".img-slides li").hide();
    $(".img-slides li").eq(index).addClass("current").fadeIn("slow").siblings().removeClass("current");
});*/





