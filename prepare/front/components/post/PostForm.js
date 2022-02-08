import React, { useCallback, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { addPost } from '../../reducer/post';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, onChangeText, setText] = useInput('');
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="게시글을 등록해주세요 👾"
      />
      <div style={{ marginTop: 20 }}>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: 'right' }}
          htmlType="submit"
        >
          Go
        </Button>
      </div>
      <div>
        {
            imagePaths.map((v) => (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={v} style={{ width: '200px' }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            ))
        }
      </div>
    </Form>
  );
};

export default PostForm;
