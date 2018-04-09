import { fromJS } from 'immutable';
import {
  SWITCH_BOX,
} from './constants';

const initialState = fromJS({
  activeItem: 'inbox',
  menuItems: [
    {
      name: 'inbox',
      url: '',
      label: {
        text: 'Inbox-all',
        unread: 2
      }
    },
    {
      name: 'sent',
      url: '/sent',
      label: {
        text: 'Sent',
        unread: 5
      }
    },
    {
      name: 'trash',
      url: '/trash',
      label: {
        text: 'Trash',
        unread: 3
      }
    }
  ]
});

function MailboxReducer(state = initialState, action){
  switch (action.type) {
    case SWITCH_BOX:
      return state
        .set('activeItem', action.targetBox);
    default:
      return state;
  }
}

export default MailboxReducer;
