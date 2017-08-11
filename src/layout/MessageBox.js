import React from 'react';
import { notification, Icon } from 'antd';

const MessageBox = function MessageBox(title, description, icon, style) {
    const args = {
        message: title,
        description,
        icon: <Icon type={icon} style={style} />,
    };
    notification.open(args);
}

export default MessageBox;