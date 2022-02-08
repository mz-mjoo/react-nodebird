import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const FormWrapper = styled(Form)`
    margin-top: 20px;
`;

const FormItem = styled(Form.Item)`
    position: relative;
    margin: 0;
`;

const FormButton = styled(Button)`
    position: absolute;
    right: 0;
    bottom: -40px;
`;

const CommentForm = ({ post }) => {
  const userId = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log('CommentForm post.id', post.id, 'CommentForm commentText', commentText);
  }, [commentText]);

  return (
    <FormWrapper onFinish={onSubmitComment}>
      <FormItem>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
          placeholder="댓글을 입력해주세요 🐰"
        />
        <FormButton type="primary" htmlType="submit">Go</FormButton>
      </FormItem>
    </FormWrapper>
  );
};

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CommentForm;
