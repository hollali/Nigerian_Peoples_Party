//keep track of the winner
let winner = false

//Get a reference to the cards div
const cards = document.querySelector ('cards');

// Render cards
cards.innerHTML = getCards();

//Get a reference to the cards buttons
const cardButtons = document.querySelector('.card-buttons');

//Get a reference to the Trump votes span
const hollaliVotesE1 = document.querySelector('.votes-number-hollali');

//Get a reference to the biden votes span
const mawuliVoteE1 = document.querySelector('.votes-number-mawuli');

//Set event listener for the vote buttons
cardButtons.forEach(cardButton =>{
    cardButton.addEventListener
    ('click', (e) =>{
        if (e.target.classList.contains('btn-hollali')){
            addVotes(0, 'hollali',hollaliVotesE1) 
        }
        else{
            addVotes(1,'mawuli',mawuliVoteE1)
        }
    })
})
