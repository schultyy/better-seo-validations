export function doesKeywordPartialMatch(keyword: string, fieldValue: string): boolean {
  if (!keyword) {
    return false;
  }
  const splittedKeyword = keyword.split(' ');
  const foundWordResults = [];

  for (const partialKeyword of splittedKeyword) {
    const currentKeywordPartial = partialKeyword.toLowerCase();
    foundWordResults.push(fieldValue.toLowerCase().indexOf(currentKeywordPartial) !== -1);
  }

  return foundWordResults.every((value) => value === true);
}
