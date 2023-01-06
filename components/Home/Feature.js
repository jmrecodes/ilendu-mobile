import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Feature = () => {
  return (
    <View style={styles.feature}>
      <View style={styles.item}>
        <View style={styles.left}>
          <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
        </View>
        <View style={styles.right}>
          <Text style={styles.itemTitle}>Endless options</Text>
          <Text>
            Choose from hundres of products to borrow. Pick it up or get it
            delivered where you want it.
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.left}>
          <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
        </View>
        <View style={styles.right}>
          <Text style={styles.itemTitle}>Customer Support</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam debitis delectus distinctio ex impedit maxime sed voluptas? Error, odit.
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.left}>
          <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
        </View>
        <View style={styles.right}>
          <Text style={styles.itemTitle}>Safe Exchange</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos ex facere quos suscipit! Adipisci blanditiis corporis nam repudiandae ut!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feature: {
    width: '100%',
    height: 400,
    paddingTop: 50,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingRight: 75,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    paddingRight: 20,
    paddingTop: 5,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  right: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Feature;
