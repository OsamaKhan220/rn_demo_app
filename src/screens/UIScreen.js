import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Card, CardItem, Container, Text, Thumbnail} from 'native-base';
import userPic from '../assets/profile-pic.jpg';

const UIScreen = () => {
  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <CardItem>
          <Body style={styles.cardBody}>
            <Thumbnail large source={userPic} />
            <Text style={styles.userName}>Osama Kemal Khan</Text>
            <Text style={styles.userTitle}>Full Stack Developer</Text>
          </Body>
        </CardItem>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#dbe4f3', padding: 20},
  card: {
    borderRadius: 10,
  },
  cardBody: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#596095',
  },
  userTitle: {
    fontSize: 16,
    color: '#7d7d7d',
  },
});

export default UIScreen;
