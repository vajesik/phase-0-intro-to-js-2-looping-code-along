// Code your solutions in this file
const guests = ["Charlie", "Samip", "Ali"]
const birthdayThankYouCards = []

function writeCards(guests, event) {
    for (let x = 0; x < guests.length; x++) {
        birthdayThankYouCards[x] = `Thank you, ${guests[x]}, for the wonderful ${event} gift!`;
    }
    return birthdayThankYouCards
}

writeCards(guests, "surprise")


function countDown(y) {while (y>=0) {console.log(y--)}}
