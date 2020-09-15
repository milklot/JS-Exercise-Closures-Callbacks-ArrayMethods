// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
    return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * In counter2 variable count is global, when in couter1 uses a closure.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure because theres a nested function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter2 for multiply functions that need to access one global variable 
 * counter1 for one function that can create multiple values
 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(team) {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, number) {
    let finalHome = 0;
    let finalAway = 0;
    let result = new Object();

    for (let i = 0; i < number; i++) {
        finalHome = finalHome + callback();
        finalAway = finalAway + callback();
    }

    result.Home = finalHome;
    result.Away = finalAway;
    return result;

}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(awayTeam, homeTeam, counter) {
    let str = '';
    if (counter === 1) {
        str = '1st';
    } else if (counter === 2) {
        str = '2nd';
    } else if (counter === 3) {
        str = '3rd';
    } else str = `${counter}th`;
    return `${str} inning: ${awayTeam} awayTeam - ${homeTeam} homeTeam`;
}

function scoreboard(getInningScore, inning, iNumber) {
    let awayTeamScore = 0;
    let homeTeamScore = 0;

    for (let i = 1; i <= iNumber; i++) {
        awayTeamScore = awayTeamScore + inning();
        homeTeamScore = homeTeamScore + inning();
        console.log(getInningScore(awayTeamScore, homeTeamScore, i));
    }
    return `Final score: ${awayTeamScore} awayTeam - ${homeTeamScore} homeTeam`;
}



console.log(scoreboard(getInningScore, inning, 9));