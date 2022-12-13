import React from 'react';
import { ScrollView, View, Text, StyleSheet, SectionList } from 'react-native';
import { mockData } from '../mockData';

// used to render each item for SectionList
const singleItem = (data) => {
  // SectionList gives an object, we named data, that has an item key with the array from our mockData data key.
  const item = data.item;

  return (
    <View style={styles.singleItem}>
      <Text>{item.title}</Text>
    </View>
  );
};

// function to extract unique key for item, takes in the data, and assigns the id as the key
const keyExtractor = (item) => item.id;

// used for the ItemSeparatorComponenet, renders between each section item
const divider = () => {
  return <View style={styles.divider}></View>;
};

const sectionHeader = (data) => {
  const section = data.section;
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.time}</Text>
    </View>
  );
};

const listHeader = () => {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>Schedule</Text>
    </View>
  );
};

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={mockData}
        renderItem={singleItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={divider}
        renderSectionHeader={sectionHeader}
        ListHeaderComponent={listHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#eee',
  },
  sectionHeader: {
    backgroundColor: '#5f27cd',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeaderText: {
    fontWeight: '700',
    color: 'white',
  },
  listHeader: {
    backgroundColor: '#ccc',
    paddingVertical: 32,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderText: {
    fontSize: 24,
    fontWeight: '600',
  },
  singleItem: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});

export default ScheduleScreen;
