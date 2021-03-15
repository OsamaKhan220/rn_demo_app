import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import {RNCamera} from 'react-native-camera';

const barcodeRecognized = (barcode) => {
  console.log('barcode===>', barcode);
};
const QRScreen = () => {
  return (
    <Container style={styles.container}>
      <RNCamera
        style={styles.scanner}
        onGoogleVisionBarcodesDetected={barcodeRecognized}></RNCamera>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  scanner: {
    flex: 1,
    width: '100%',
  },
});

export default QRScreen;
