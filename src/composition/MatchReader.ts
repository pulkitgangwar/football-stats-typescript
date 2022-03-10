import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { convertDateStringToDate } from "../utils/dateStringToDate";
import { CsvFileReader } from "./CsvFileReader";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  static fromCsv(path: string): MatchReader {
    return new MatchReader(new CsvFileReader(path));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        convertDateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
