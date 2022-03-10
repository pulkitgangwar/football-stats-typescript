import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./Summary";

const matches = MatchReader.fromCsv("football.csv");
matches.load();

const summary = Summary.analysisWithHtmlReport("Chelsea");
summary.buildAndPrintReport(matches.matches);

const consoleSummary = Summary.analysisWithConsoleReport("Liverpool");
consoleSummary.buildAndPrintReport(matches.matches);
