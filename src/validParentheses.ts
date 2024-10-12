export function validParentheses(s: string): boolean {
  if (s.length % 2) {
    return false;
  }
  let stack: string[] = [];
  const bracketOpen: { [key: string]: boolean } = {
    "(": true,
    "[": true,
    "{": true,
  };
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of s) {
    if (bracketOpen[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
