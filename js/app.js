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

// Deactivate submit button as long as no score is selected
// Add event listener to submit button
// Show the thank you card when it's clicked