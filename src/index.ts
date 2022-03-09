import fs from "fs";

const matchesInCSV = fs.readFileSync("./football.csv", { encoding: "utf-8" });
const matches = matchesInCSV
  .split("\n")
  .map((match: string): string[] => match.split(","));

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`man united won ${manUnitedWins} games`);
