//Get element from dom//
//Create variable for our score count//
//Create a variable for multiplier count//
//add event listener to our img element//
//will add our current score count + multiplier count//

const cookie = document.getElementById("cookie");
const points = document.getElementById('points');
const upgrade = document.getElementById('upgrade-button');
const multiplierCount = document.getElementById('multiplier-count')
let score = 0;
let multiplier = 1;
let upgradeCost = 30;

cookie.addEventListener("click", () => {
    score += multiplier

    points.textContent = score
});

upgrade.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        multiplier++;
        upgradeCost *= 2; // Increase upgrade cost
        points.textContent = score;
        upgrade.textContent = `Upgrade (${upgradeCost} points)`;
        multiplierCount.textContent = `+${multiplier}`
    }
});
