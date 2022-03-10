import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

let manUnitedWins = 0;

const fileReader = new MatchReader("football.csv");
fileReader.read();

for (let match of fileReader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`man united won ${manUnitedWins} games`);
