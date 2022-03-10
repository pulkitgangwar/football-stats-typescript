import fs from "fs";
import { DataReader } from "./MatchReader";

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public path: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      });
  }
}
