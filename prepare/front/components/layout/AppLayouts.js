import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Input, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from '../auth/UserProfile';
import LoginForm from '../auth/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
`;

const AppLayouts = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      {/* 태블릿 - sm / 모바일 - xs */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {
            isLoggedIn ? <UserProfile /> : <LoginForm />
        }
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://velog.io/@fromzoo" target="_blank" rel="noreferrer noopner">Made by MJ</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayouts;
