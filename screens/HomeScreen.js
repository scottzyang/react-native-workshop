import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from '../assets/react.png';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Icon} />
      <Text style={styles.appName}>RNCONF</Text>
      <Text style={styles.description}>
        The best React Native conference, powered by Shopify
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See Schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4D4D4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    width: windowWidth,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  appName: {
    fontSize: 60,
    fontWeight: '700',
    color: '#222f3e',
  },
  description: {
    paddingHorizontal: 48,
    textAlign: 'center',
    marginBottom: 48,
    color: '#576574',
  },
  button: {
    backgroundColor: '#5f27cd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
