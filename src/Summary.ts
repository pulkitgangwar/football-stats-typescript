import { HtmlReport } from "./report/HtmlReport";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsoleReport } from "./report/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static analysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  static analysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analysis: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analysis.run(matches));
  }
}
