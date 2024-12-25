import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ProfileScreen = () => {
  useEffect(() => {
    console.log('ProfileScreen Mounted');
    return () => {
      console.log('ProfileScreen Unmounted');
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>This is the Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
