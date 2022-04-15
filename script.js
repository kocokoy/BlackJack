let firstCard = getRandomCard();
let secondCard = getRandomCard() ;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function getRandomCard(){
    randomNumber = Math.floor( Math.random() * 13 + 1)
    return randomNumber
}

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
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    let card = getRandomCard()
    sum += card 
    cards.push(card)
    console.log(cards)
    renderGame()

}