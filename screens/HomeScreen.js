import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Button} from 'native-base';

const Home = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Button
        style={styles.navigationBtn}
        onPress={() => navigation.navigate('QRScreen')}>
        <Text>Scan QR</Text>
      </Button>
      <Button
        style={styles.navigationBtn}
        onPress={() => navigation.navigate('CalendarScreen')}>
        <Text>Calender</Text>
      </Button>
      <Button
        style={styles.navigationBtn}
        onPress={() => navigation.navigate('UIScreen')}>
        <Text>UI Page</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  navigationBtn: {
    backgroundColor: '#6b86f3',
    alignSelf: 'center',
  },
});

export default Home;
