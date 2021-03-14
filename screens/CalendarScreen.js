import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import {Calendar} from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <Container style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          Alert.alert('You sleceted', day.dateString);
        }}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        enableSwipeMonths={true}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CalendarScreen;
