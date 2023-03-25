import {Pressable, StyleSheet, Text, View} from 'react-native';

const Tabs = ({showTab, showOverview, showReviews}) => {
  return (
    <View style={styles.tabs}>
      <View
        style={[
          styles.tabTextCon,
          showTab === 'overview' ? styles.activeTab : '',
        ]}>
        <Pressable
          onPress={showOverview}
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                ? 'rgba(200, 200, 200, .2)'
                : 'transparent',
            },
            styles.press,
          ]}>
          <Text
            style={[
              styles.tabTexts,
              showTab === 'overview' ? styles.activeText : '',
            ]}>
            Overview
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.tabTextCon,
          showTab === 'reviews' ? styles.activeTab : '',
        ]}>
        <Pressable
          onPress={showReviews}
          android_ripple={{color: '#ccc', borderless: true}}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                ? 'rgba(200, 200, 200, .2)'
                : 'transparent',
            },
            styles.press,
          ]}>
          <Text
            style={[
              styles.tabTexts,
              showTab === 'reviews' ? styles.activeText : '',
            ]}>
            Reviews
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderTopColor: '#eee',
  },
  tabTextCon: {
    flex: 1,
  },
  tabTexts: {
    fontWeight: '700',
    color: '#aaa',
    textAlign: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderStyle: 'solid',
    borderBottomColor: '#666',
  },
  activeText: {
    color: '#333',
  },
});

export default Tabs;
