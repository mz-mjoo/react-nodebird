import React from 'react';
import Head from 'next/head';
import AppLayouts from '../components/AppLayouts';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
  const followerList = [{ nickname: '이달이' }, { nickname: '달이짱' }, { nickname: 'joo' }];
  const followingList = [{ nickname: '이달이' }, { nickname: '달이짱' }, { nickname: 'joo' }];
  return (

    <>
      <Head>
        <title>
          내 프로필 | NodeBird
        </title>
      </Head>
      <AppLayouts>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayouts>
    </>

  );
};

export default profile;
