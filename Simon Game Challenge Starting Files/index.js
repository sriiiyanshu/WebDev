var userClickedPattern = []
var gamePattern = []
var buttonColours = ['red', 'blue', 'green', 'yellow']
var level=0
var started=false;

var randomNumber;
function nextSequence(){
    userClickedPattern = []
    level++;
    $("h1").text("Level "+level);
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}


 $(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
 })


 function playsound(color){
    var audio = new Audio('./sounds/'+color+'.mp3');
        audio.play();
 }

 function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
        setTimeout(function() {
            $("#"+currentColor).removeClass("pressed");
        }, 100);
 }

 $(document).keypress(function(){
    if(started==false){
        $("h1").text("Level "+level);
        started=true;
        nextSequence();
    }
 })

 function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length)
        setTimeout(nextSequence, 1000);
    }
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
 }

 function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
 }



