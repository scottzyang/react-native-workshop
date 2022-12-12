import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.talkDetails}>
        <Text style={styles.title}>Talk title</Text>
        <Text style={styles.time}>Date & time</Text>
        <Text style={styles.description}>
          Talk description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris varius nisl sapien, a ullamcorper felis aliquam nec.
          Aliquam erat volutpat. Donec eget risus pretium orci fermentum aliquam
          et pellentesque sem. Maecenas luctus dictum odio, imperdiet pharetra
          felis accumsan quis. Integer lobortis augue felis. Ut non dui gravida,
          luctus lectus non, semper lectus.
        </Text>
      </View>
      <View style={styles.speaker}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://picsum.photos/id/365/80/80.jpg' }}
        />
        <View>
          <Text style={styles.speakerName}>Speaker name</Text>
          <Text style={styles.speakerRole}>Job title</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  talkDetails: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  time: {
    fontWeight: '700',
    marginTop: 16,
  },
  description: {
    marginTop: 8,
  },
  speaker: {
    padding: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 28,
    elevation: 3,
    shadowColor: '#000',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 24,
    marginHorizontal: 24,
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginRight: 16,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  speakerRole: {
    fontSize: 11,
  },
});

export default DetailsScreen;
