import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExperimentOutlined,
  FieldTimeOutlined,
  DotChartOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.css'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function App() {

  // 默认显示页
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/direct")
    }
  })

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
          <Menu.Item key="3">
            <DotChartOutlined />
            <span>关键词检索</span>
            <Link to="/search" />
          </Menu.Item>
          <Menu.Item key="4">
            <HeartOutlined />
            <span>友情链接</span>
            { /*eslint-disable-next-line*/ }
            <a href="https://www.quantacenter.com" target="_blank"/>
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
