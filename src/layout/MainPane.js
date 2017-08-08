import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const MainPane = function MainPane({ children }) {
  return (
    <Layout style={{ marginLeft: 320 }}>
      <Content style={{ margin: '24px 16px 24px', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
}

export default MainPane;