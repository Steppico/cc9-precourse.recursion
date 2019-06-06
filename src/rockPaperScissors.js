/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

const rockPaperScissors = (n=3) => {
  const possibleHands = ["rock", "paper", "scissors"];
  const rounds = n;
  const result = [];

  function recursion(roundsLeft, played){
    if (roundsLeft === 0) {
      result.push(played);
      return;
    } else {
      for (let i = 0; i < possibleHands.length; i++) {
        recursion(roundsLeft-1, played.concat(possibleHands[i]))
      }
    }
  };
  recursion(rounds, []);
  console.log(result)
  return result;
};
