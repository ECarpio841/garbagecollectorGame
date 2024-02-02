import { startingQuestions } from "./game.js";

//Game Over
export function gameOver(){
    console.log("Game Over");
    alert("GAME OVER. TRY IT AGAIN");
    let question = confirm("Do you want to try it again?");
    if (question) {
        startingGame();
    }
}
//restart Game 
export function restartGame (){
    let question = confirm("Do you want to play again?");
    if (question) {
        startingGame();
    }
}
// starting game
function startingGame(){
    alert("Welcome to `killing the President 1963 version`");
    alert("Your desicions will make the diference in all this game");
    alert("You just have 4 oportunities. Do not let them die");
    startingQuestions();

}




startingGame();