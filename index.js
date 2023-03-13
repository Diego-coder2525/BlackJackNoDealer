let player = {
    name : "Client",
    chips : 100,
    say: function(){
        console.log("Hello!")
    }
}

let firstCard, secondCard;
let cards = [];
let sum;
let hasBlackJack;
let isAlive = true;
let isBoosted = false;
let bet = 10;

let message;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $"+player.chips;



function startGame(){
    if(player.chips>0){
        sum = 0;
        hasBlackJack = false;
        isBoosted = false;
        firstCard = getRandomCard();
        secondCard = getRandomCard();
        sum = firstCard+secondCard;
        cards = [firstCard,secondCard];
        player.chips-=bet;
        renderGame();
    }else{
        message="No more credits!";
        messageEl.textContent = message;
    }
    
}
function renderGame(){
    if(isAlive===true){
        if(sum <= 20){
            message="Do you want to draw a new card?"
        }else if(sum === 21){
            message="Blackjack!"
            player.chips+=2 * bet;
            hasBlackJack = true;
        }else if(player.chips<=0){
            message="No more credits!"
            isAlive = false;
        }
        else{
            message="Out of the game!"
            isBoosted=true;
        }
    
        cardsEl.textContent = "Cards: ";
        for(let i=0;i<cards.length;i++){
            cardsEl.textContent += cards[i]+" "
        }
        
        sumEl.textContent = "Sum: "+sum;
        messageEl.textContent = message;
        playerEl.textContent = player.name + ": $"+player.chips;
        
    }
}

function newCard(){
    if(hasBlackJack === false && isAlive === true && isBoosted ===false){
        let newCard = getRandomCard(); 
        cards.push(newCard)
        sum+=newCard;
        renderGame();
    }
}
function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber >10){
        return 10
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}


//cards.push(x) <-- adding a new item to array
//cards.pop(x) <-- remove an item