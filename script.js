let firstCard = 10;
let secondCard = 11 ;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20 ){
        message = "Do you want to draw a new card?"  
    } else if ( sum === 21){
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " & "  + cards[1] 
}

function newCard(){
    let newCard = 7;
    sum += newCard 
    cards.push(newCard)
    console.log(cards)

    renderGame()

}