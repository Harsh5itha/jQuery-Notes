//html and css change
$("h1").css("color","red");
$("p").addClass("big-title margin50");
$("h3").text("This is the changed text using jQuery!");
$("button").html("<em>HTML changed!</em>");
$("img").attr("src");
console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com/");
$("h2").click(function(){
  $("h2").css("color","blue");
});
//eventListener
$("button").click(function(){
  $("h4").css("color","green");
});
$("input").keypress(function(event){
  $("h2").text("This is the key pressed in input: "+event.key);
})
$("h1").on("click", function(){
  $("h1").css("color","orange");
});
//Animation
//hide(), show()
$("button").on("click",function(){
  $("h4").toggle();
});
//fadeout(), fadein()
$("button").on("click",function(){
  $("h4").fadetoggle();
});
//slideUp() ,slideDown()
$("button").on("click",function(){
  $("h4").slidetoggle();
});
$("button").on("click",function(){
  $("h2").slideUp().slideDown().animate({opacity:0.5});
});
