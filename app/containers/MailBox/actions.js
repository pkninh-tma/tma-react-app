import {
  SWITCH_BOX,
} from './constants';


export const switchToMailBox = (targetBox) => {
  return {
    type: SWITCH_BOX,
    targetBox
  };
};
