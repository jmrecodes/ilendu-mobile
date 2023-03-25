import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './commonStyles';

const ReviewsHeader = () => {
  return (
    <View style={[styles.reviewsHeader]}>
      <Text style={styles.title}>User reviews</Text>
      <View style={styles.sort}>
        <FontAwesomeIcon style={styles.icons} icon="fa-solid fa-filter" />
        <Text style={styles.title}>Most useful</Text>
        <FontAwesomeIcon style={styles.icons} icon="fa-solid fa-chevron-down" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sort: {
    flexDirection: 'row',
  },
  icons: {
    marginTop: 2,
    paddingHorizontal: 15,
  },
});

export default ReviewsHeader;
