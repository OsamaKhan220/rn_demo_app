import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';

const UIScreen = () => {
  return (
    <Container style={styles.container}>
      <Text>UI Screen</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UIScreen;
