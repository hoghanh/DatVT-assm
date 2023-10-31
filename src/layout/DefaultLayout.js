import React from 'react';
import { Button, Image, Layout, Typography, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import './style.css';
import { FPTLogo } from '../icons/Logo';

const { Header, Content, Sider } = Layout;

const DefaultLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: colorBgContainer,
          justifyContent: 'space-between',
          borderBottom: '1px solid #000',
        }}
      >
        <div className='fpt-logo'>
          <FPTLogo />
          <Typography.Title className='logo-assm' level={2}>
            ASSM
          </Typography.Title>
        </div>

        <div className='personal'>
          <Typography.Text className='user-name'>Tran Van A</Typography.Text>
          <Image src='icon/Ellipse 47.png' width={35} preview={false} />
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <div className='sider'>
            <Link to='/'>
              <Button size='large'>Bảng điều khiển</Button>
            </Link>
            <Link to='/schedule'>
              <Button size='large'>Lịch</Button>
            </Link>
            <Link to='/class'>
              <Button size='large'>Lớp học</Button>
            </Link>
            <div className='logout'>
              <Button size='large'>Đăng xuất</Button>
            </div>
          </div>
        </Sider>
        <Content
          style={{
            padding: '10px 30px',
            margin: '20px 0 0 20px',
            background: colorBgContainer,
          }}
        >
          {children}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
