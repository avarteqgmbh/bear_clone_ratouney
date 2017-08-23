import React from 'react';
import {
  notification,
  Icon,
} from 'antd';
import {
  SYNC_NOTE_SUCCESS,
  SYNC_NOTE_FAILURE,
} from './../topmenu/Types';
import MessageBoxData from './Messages';


const MessageBoxReducer = function MessageBoxReducer(state = null, action) {
  let args;

  switch (action.type) {
    case SYNC_NOTE_SUCCESS:
      args = {
        message:     MessageBoxData.SYNC_NOTE_SUCCESS.title,
        description: MessageBoxData.SYNC_NOTE_SUCCESS.body,
        icon:        <Icon
          type={MessageBoxData.SYNC_NOTE_SUCCESS.icon}
          style={MessageBoxData.SYNC_NOTE_SUCCESS.style}
        />,
      };
      notification.open(args);
      break;

    case SYNC_NOTE_FAILURE:
      args = {
        message:     MessageBoxData.SYNC_NOTE_FAILURE.title,
        description: action.error,
        icon:        <Icon
          type={MessageBoxData.SYNC_NOTE_FAILURE.icon}
          style={MessageBoxData.SYNC_NOTE_FAILURE.style}
        />,
      };
      notification.open(args);
      break;

    default:
  }
  return state;
};

export default MessageBoxReducer;
