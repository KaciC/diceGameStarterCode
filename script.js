$(document).ready(function(){
  $("#roll-dice").click(function(){
    
   var num = ["1","2","3","4","5","6"];                
  var rand = Math.floor(Math.random()*num.length+1);    
if (rand===1){
    $("#dice1").attr( "src", "images/1.png"); }
 if(rand===2){
        $("#dice1").attr( "src", "images/2.png");
        }
 if(rand===3){
        $("#dice1").attr( "src", "images/3.png");
        }
 if(rand===4){
        $("#dice1").attr( "src", "images/4.png");
        }
  if(rand===5){
        $("#dice1").attr( "src", "images/5.png");
        }
    
    if(rand===6){
        $("#dice1").attr( "src", "images/6.png"); }
        console.log(rand);
  });
$("#roll-dice").click(function(){
    
   var num = ["1","2","3","4","5","6"];                
  var rand = Math.floor(Math.random()*num.length+1);    
if (rand===1){
    $("#dice2").attr( "src", "images/1.png"); }
 if(rand===2){
        $("#dice2").attr( "src", "images/2.png");
        }
 if(rand===3){
        $("#dice2").attr( "src", "images/3.png");
        }
 if(rand===4){
        $("#dice2").attr( "src", "images/4.png");
        }
  if(rand===5){
        $("#dice2").attr( "src", "images/5.png");
        }
    
    if(rand===6){
        $("#dice2").attr( "src", "images/6.png"); }
        console.log(rand);
  });
});

/*var num = ["1","2","3","4","5","6"];                
  var rand = Math.floor(Math.random()*num.length+1);           
 if (rand===1){
    $("img").attr( "src", "http://www.speedymath.com/images/dice/1-border.gif"); }
 if(rand===2){
        $("img").attr( "src", "http://www.speedymath.com/images/dice/2-border.gif");
        }
 if(rand===3){
        $("img").attr( "src", "http://www.speedymath.com/images/dice/3-border.gif");
        }
 if(rand===4){
        $("img").attr( "src", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png");
        }
  if(rand===5){
        $("img").attr( "src", "http://www.speedymath.com/images/dice/5-border.gif");
        }
    
    if(rand===6){
        $("img").attr( "src", "http://www.sirinilsen.no/wp/wp-content/uploads/2011/09/dice-six.jpg"); }
console.log(rand);
});

$("button").click(function(){
  var colors = ["red","orange","yellow","lightgreen","lightblue","purple"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $("html").css("background-color", colors[rand]);});
*/