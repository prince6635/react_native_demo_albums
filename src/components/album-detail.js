import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './card-section';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        {/*the following whole line becames props.children in card.js*/}
        <Text>{props.album.title}</Text>
      </CardSection>

      <CardSection>
        <Text>testing...</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
