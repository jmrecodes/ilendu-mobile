import {StyleSheet, Text, View} from 'react-native';
import commonStyles from './commonStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ReviewDetail = () => {
  return (
    <View style={[commonStyles.bgLighter, styles.reviewDetail]}>
      <View
        style={[
          commonStyles.flexRow,
          commonStyles.flexBetween,
          styles.rdHeader,
        ]}>
        <View style={commonStyles.flexRow}>
          <FontAwesomeIcon icon="fa-regular fa-circle" size={20} />
          <Text style={styles.name}>Profile name</Text>
          <Text style={commonStyles.muted}>4 days ago</Text>
        </View>

        <View style={commonStyles.starBar}>
          <FontAwesomeIcon
            style={commonStyles.star}
            icon="fa-solid fa-star"
          />
          <FontAwesomeIcon
            style={commonStyles.star}
            icon="fa-solid fa-star"
          />
          <FontAwesomeIcon
            style={commonStyles.star}
            icon="fa-solid fa-star"
          />
          <FontAwesomeIcon
            style={commonStyles.star}
            icon="fa-solid fa-star"
          />
          <FontAwesomeIcon
            style={commonStyles.unStar}
            icon="fa-solid fa-star"
          />
        </View>
      </View>

      <Text>
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        Aliquid architecto doloribus hic in ipsa ipsum minima molestiae
        neque!"
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    paddingHorizontal: 10,
  },
  reviewDetail: {
    padding: 10,
    marginBottom: 10,
  },
  rdHeader: {
    marginBottom: 10,
  },
});

export default ReviewDetail;
