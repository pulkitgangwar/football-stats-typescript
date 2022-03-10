import fs from "fs";
import { MatchResult } from "./MatchResult";
import { convertDateStringToDate } from "./utils/dateStringToDate";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public path: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): MatchData => {
        const matchData = match.split(",");
        return [
          convertDateStringToDate(matchData[0]),
          matchData[1],
          matchData[2],
          parseInt(matchData[3]),
          parseInt(matchData[4]),
          matchData[5] as MatchResult,
          matchData[6],
        ];
      });
  }
}