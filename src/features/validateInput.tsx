import { REGULAR_EXPRESSIONS } from '../data/constants';

export function validateInput(inputValue: string | undefined, inputName: string | undefined) {
  if (inputName) {
    const regularExpression = REGULAR_EXPRESSIONS[inputName];
    if (inputValue === undefined || regularExpression === undefined) {
      return false;
    }
    if (inputValue.length === 0 || !regularExpression.test(inputValue)) {
      return false;
    }
  }
  return true;
}
