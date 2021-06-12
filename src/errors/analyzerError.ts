import { AnalyzerResult } from "./analyzerResult";
import { ResultType } from "./resultType";

export class AnalyzerError extends AnalyzerResult {
    constructor(public title: string, public message: string, public resultType: ResultType) {
      super(title, message, resultType);
    }
}