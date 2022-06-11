import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExperimentOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './App.css'
import { Outlet, Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
             style={{
              overflow: "auto",
              height: "100vh",
              position: "sticky",
              top: 0,
              left: 0
            }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <ExperimentOutlined />
            <span>直接测试</span>
            <Link to="/direct" />
          </Menu.Item>
          <Menu.Item key="2">
            <FieldTimeOutlined />
            <span>实时话题</span>
            <Link to="/real_time" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            width: "100%",
            position: "fixed",
            zIndex: 999,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            marginTop: "80px",
            marginBottom: "24px",
            marginLeft: "16px",
            marginRight: "16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
