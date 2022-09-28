const ratingCard = document.querySelector('#rating-card')
const thankYouCard = document.querySelector('#thank-you-card')
const ratingSpan = document.querySelector('#rating-span')

/***************************\
 ****** Score buttons ******  
\***************************/

let selectedScore;

const scoreButtons = document.querySelector('#score-buttons').getElementsByTagName('button')
for (let button of scoreButtons) {
  button.addEventListener('click', updateScore)
}

function updateScore(event) {
  const newSelectedScore = event.srcElement.getAttribute('value');
  updateSelectedButton(selectedScore, newSelectedScore)

  selectedScore = newSelectedScore

  submitButton.removeAttribute('disabled')
}

function updateSelectedButton(oldSelectedScore, newSelectedScore) {
  // Unselect old score button
  if (oldSelectedScore) {
    const oldSelectedButton = document.querySelector(`[value="${oldSelectedScore}"]`)
    oldSelectedButton.classList.toggle('selected')
  }

  // Select new score button
  const newSelectedButton = document.querySelector(`[value="${newSelectedScore}"]`)
  newSelectedButton.classList.toggle('selected')
}

/***************************\
 ****** Submit button ******  
\***************************/

const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', handleSubmit);

function handleSubmit() {
  ratingCard.classList.toggle('hidden')
  thankYouCard.classList.toggle('hidden')

  ratingSpan.innerHTML = selectedScore
}