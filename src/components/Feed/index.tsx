import React from 'react';

import CTweet from '../Tweet';

import { Container, Tab, Tweets} from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        <CTweet />
        <CTweet />
        <CTweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
