let homescore = 0
let guestscore = 0

const homeScoreEl = document.getElementById("homescore")
const guestScoreEl = document.getElementById("guestscore")

function hadd1 () {
    homescore += 1
    homeScoreEl.textContent = homescore
}

function hadd2() { homescore += 2; homeScoreEl.textContent = homescore }
function hadd3() { homescore += 3; homeScoreEl.textContent = homescore }

function gadd1() { guestscore += 1; guestScoreEl.textContent = guestscore }
function gadd2() { guestscore += 2; guestScoreEl.textContent = guestscore }
function gadd3() { guestscore += 3; guestScoreEl.textContent = guestscore }