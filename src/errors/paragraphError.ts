import { Location } from "../Location";
import { AnalyzerError } from "./analyzerError";
import { ResultType } from "./resultType";

export class ParagraphError extends AnalyzerError {
    constructor(public title: string, public loc: Location, public message: string, public resultType: ResultType) {
      super(title, message, resultType);
    }
}