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
    
  // likeIcon = item.liked ? 'heart' : 'heart-outline';
  // likeIconColor = item.liked ? '#2e64e5' : '#333';


  return (
    <Card >
    <UserInfo>
      <UserImg source={require('../assets/image1.jpg')}/>
      <UserInfoText>
      {/* <UserName> {}</UserName> */}
      

      {/* <PostTime> {}  </PostTime> */}
      </UserInfoText>
    </UserInfo>
    <PostText>{item.title}</PostText>
    <PostImg source={require('../assets/image1.jpg')}/>
    <InteractionWrapper>
      <Interaction>
        {/* <Ionicons name={likeIcon} size={25} color={likeIconColor}></Ionicons> */}
        <Text>Like</Text>
      </Interaction>
      <Interaction>
        {/* <Ionicons name="md-chatbubble-outline" size={25}></Ionicons> */}
        <Text>Comment</Text>
      </Interaction>
    </InteractionWrapper>
  </Card>
  );
};

export default PostCard;