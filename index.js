
let cards = [] // array
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let isOver = false
let isStarted = false
let playerEl = document.querySelector("#player-el")
let player = {
    name: "Priyansh",
}
let score = 0

function startGame() {
    isAlive = true
    
    if (isOver === false && isStarted=== false) {
        let firstcard = getRandomcard()
        let secondcard = getRandomcard()
        cards.push(firstcard)
        cards.push(secondcard)
        renderGame()
        isStarted = true
    }
    playerEl.textContent = player.name + ": $" + score //dcfdsv
}

function renderGame() {
    
    cardsEl.textContent = " Cards: "
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw one more card?"
        score += 25
    }
    
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack."
        let hasBlackjack = true
        isAlive = false
        isOver = true // jhvuijh
        score += 50
    }
    
    else {
        message = "You're out of the game!"
        isAlive = false
        isOver = true // ijjdfhudsih
        score += 10
    }
    playerEl.textContent = player.name + ": $" + score  //dscdv
    messageEl.textContent = message
}

function newcard() {
    // isOver = true
    if (isAlive === true && hasBlackjack === false && isOver === false) {
        let card = getRandomcard()
        cards.push(card)
        sum = 0
        renderGame()
    }
    playerEl.textContent = player.name + ": $" + score //dfsv
}

function getRandomcard() {
    let random = Math.floor((Math.random()) * 13) + 1
    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 10
    }
    else {
        return random
    }
}

function newgame(){
    if(isOver === true)
    {
        cards = []
        sum = 0
        score = 0
        isOver = false
        isStarted = false
        sumEl.textContent = "Sum: " + sum
        cardsEl.textContent = "Card: " 
        // startGame()
        playerEl.textContent = player.name + ": $" + score //dsfsd
    }
}
playerEl.textContent = player.name + ": $" + score