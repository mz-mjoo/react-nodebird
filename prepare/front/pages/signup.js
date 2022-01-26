import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Checkbox, Form, Input, Button } from 'antd';
import styled from 'styled-components';
import AppLayouts from '../components/AppLayouts';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
    color:red;

`;

const signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, []);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    // 패스워드와 패스워드 확인이 같지 않다면,
    if (password !== passwordCheck) {
      console.log('a');
      return setPasswordError(true);
    }

    // 약관에 동의하지 않을때
    if (!term) {
      return setTermError(true);
    }

    console.log('서버로 보내는 데이터들....', id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <AppLayouts>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>어쩌구에 동의합니다.</Checkbox>
            {termError && <ErrorMessage style={{ color: 'red' }}>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayouts>
    </>

  );
};

export default signup;
