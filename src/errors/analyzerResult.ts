import { ResultType } from "./resultType";

export abstract class AnalyzerResult {
    constructor(public title: string, public message: string, public resultType: ResultType) {}
}