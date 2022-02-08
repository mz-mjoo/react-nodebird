import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import React, { useCallback, useState } from 'react';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

// popover 더보기 버튼
// ☠️ more 버튼에서 수정 -> 본인만 / 신고 -> 남들만 할 수 있도록 구현
const PostCard = ({ post }) => {
  // 내 아이디
  const userId = useSelector((state) => state.user.me);
  // 좋아요
  const [liked, setLiked] = useState(false);
  // 댓글
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  // 좋아요 토글 버튼
  const onToggleLike = useCallback(() => {
    setLiked((prevState) => !prevState);
  }, []);

  // 댓글 기능 토글
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prevState) => !prevState);
  }, []);
console.log('PostCard의 post 👿',post);

  return (
    <div style={{ marginBottom: 20 }}>
      {/* 게시글 */}
      <Card
        cover={post.Image[0] && <PostImages images={post.Image} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={(
              <Button.Group>
                {
                    userId && post.User.id === userId ? (
                      <>
                        <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                      </>
                    ) : <Button>신고</Button>
                }
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        {/* <Image /> */}
        <Card.Meta
          avatar={<Avatar>{post.User.nickname}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
        {/* <Buttons /> */}
      </Card>
      {/* 댓글 */}
      {
        commentFormOpened && (
        <div>
          {/* 댓글 입력 */}
          <CommentForm post={post} />
          {/* 댓글 리스트 */}
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(<Avatar>{item.User.nickname[0]} </Avatar>)}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
        )
      }
      {/* <Comments /> */}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
