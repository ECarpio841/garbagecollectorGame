import { gameOver,  restartGame} from "./main2.js"
let mainCharacter = {
    name : "John F. Kennedy",
    age : 34 ,  
    wife : {
        name : "Jacqueline Bouvier",
        age : 22,
        daughter : {
            name : "Caroline Kennedy",
            age : 5,
            brother : {
                name : "Patrick Bouvier",
                age : "3 days"
            }
        }

    }
};


export function startingQuestions(){
    alert("Now you are Caroline Kennedy")
    alert("Your thoughts makes you feel something weird in you")
    alert("It is about your family")
    alert("You should advice to someone to go to the doctor")
    firstQuestion();
   
 }

function firstQuestion () {
    alert("Use 1 to say it to your mom, Use 2 to say it to your dad, Use 3 to say it to your best friend")
     let questionone = prompt("Select your answer")

    if(questionone == "1"){
        alert("Thats it, your mom gave birth a healthy boy. Now he is your brother")
        alert("It`s missing tree more questions")
        secondQuestion();
    }else if(questionone == "2" || questionone == "3") {
       
         
        delete mainCharacter.wife.daughter.brother
         console.log(JSON.stringify(mainCharacter))
        console.log(mainCharacter.wife.daughter.brother)
        alert("After `that day` your brother died 3 days after your mom gave birth")
        alert("Still playing")
        secondQuestion();
    } else {
         alert("Thats not an option. Try it again")
         firstQuestion();
    }

}

function secondQuestion(){
    alert("Around 1993 you are traveling with your new husband. Your life seems so beautiful.")
    alert("Your name was Jacqueline Kennedy. Now Jacqueline Oassis")
    alert("Who will ride in the horse in your family trip?")
    let questionTwo = prompt("Select your answer: 1.- Your son. 2.-You 3.-Your daughter")

    if(questionTwo == "3"){
         
        delete mainCharacter.wife.daughter
         console.log(JSON.stringify(mainCharacter))
        console.log(mainCharacter.wife.daughter)
        alert("After that, your daughter fell from the horse and she suffered an incident. She died in 1994")
        alert("Still playing")
        thirdQuestion();
    }else if (questionTwo == "2" || questionTwo == "1" ){
        alert("Thats it, your family really enjoyed the little trip")
        alert("Still playing")
        thirdQuestion();
    } else {
        alert("Thats not an option. Try it again")
        secondQuestion();
    }
}

function thirdQuestion (){
    alert("Now you are Caroline Kennedy, your mission is similar")
    alert("Someone here is having a problem with their blood")
    alert("You should say it to someone of ypur family")
    alert("Your decision could save to someone")

    let questionthree = prompt("Select your answer: 1.-Your mom 2.- Your dad 3.-Your brother");
    if (questionthree == "1") {
        alert("You have saved to your mom. She could have died of a cancer in 1994")
        alert("You are ending the game. Just one more question")
        fourthQuestion();
    }else if (questionthree == "2" || questionthree == "3"){
         
        delete mainCharacter.wife
         console.log(JSON.stringify(mainCharacter))
        console.log(mainCharacter.wife)
        alert("Your mom has died in 1994 of a blood cancer")
        alert("Your last attempt to save someone")
        fourthQuestion();
    }else {
        alert("Thats not an option. Try it again")
        thirdQuestion();
    }

}

function fourthQuestion (){
    alert("NOW YOU ARE IN DALLAS");
    alert("Something wrong will happen in a few hours")
    alert("Your name : John F. Kennedy")
    alert("What do you want to do today?")

    let questionfour =  prompt("Select your answer:  1.- Stay at home 2.- Keep working in Dealey 3.-Have your normal day")
    if (questionfour == "2" || questionfour == "3"){
        //let mainCharacter = mainCharacter;
        //mainCharacter =  null;
        delete mainCharacter.name;
        delete mainCharacter.age;
        mainCharacter =  null ; 
        console.log("end");
        console.log(JSON.stringify(mainCharacter));
        alert("BAM!!!")
        alert("You died in Daley 1963 for a long shoot")
        alert("Your family has died too for your absence")
        alert("You have killed the president")
        gameOver();
    }else if (questionfour == "1"){
        alert("It was a good desision")
        alert("The history has changed a lot")
        alert("You have saved the President")
        alert("THANKS FOR PLAYING!!")
        restartGame();
    } else {
        alert("Thats not an option");
        alert("TRY IT AGAIN!")
        fourthQuestion();
    }
}
