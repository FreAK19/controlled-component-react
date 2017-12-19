import {CHANGE_INPUT_TEXT} from './actionTypes';

export default changeInput = (text) => {
  return {
    type: CHANGE_INPUT_TEXT,
    value: text
  }
}