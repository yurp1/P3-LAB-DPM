import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Home Screen!');

  useEffect(() => {
    console.log('HomeScreen Mounted');
    return () => {
      console.log('HomeScreen Unmounted');
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{welcomeMessage}</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
