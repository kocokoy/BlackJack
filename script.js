let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function getRandomCard(){
    randomNumber = Math.floor( Math.random() * 13 ) + 1 

    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    let cards = [firstCard, secondCard]
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

function newCard() {
    let card = getRandomCard()
    sum += card 
    cards.push(card)
    console.log(cards)
    renderGame()

}