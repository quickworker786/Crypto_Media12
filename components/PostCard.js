import React, { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Text,
} from 'react-native';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';

const PostCard = ({item}) => {
    
  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';


  return (
    <Card>
    <UserInfo>
      <UserImg source={item.userImg}/>
      <UserInfoText>
      <UserName> {item.userName}</UserName>
      <PostTime> {item.postTime}  </PostTime>
      </UserInfoText>
    </UserInfo>
    <PostText>{item.post}</PostText>
    <PostImg source={item.postImg }/>
    <InteractionWrapper>
      <Interaction active={item.liked}>
        <Ionicons name={likeIcon} size={25} color={likeIconColor}></Ionicons>
        <Text>Like</Text>
      </Interaction>
      <Interaction>
        <Ionicons name="md-chatbubble-outline" size={25}></Ionicons>
        <Text>Comment</Text>
      </Interaction>
    </InteractionWrapper>
  </Card>
  );
};

export default PostCard;