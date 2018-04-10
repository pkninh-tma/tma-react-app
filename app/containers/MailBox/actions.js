import {
  SWITCH_BOX,
} from './constants';


export const switchToMailBox = targetBox => ({
  type: SWITCH_BOX,
  targetBox,
});
