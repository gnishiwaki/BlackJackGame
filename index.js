let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want to draw another card?"
} else if (sum === 21) {
    message = "BLACKJACK!!! 🥳"
    hasBlackJack = true
} else {
    message = "You're over! 😭"
    isAlive = false
}

