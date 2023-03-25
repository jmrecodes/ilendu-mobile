import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './commonStyles';

const Reviews = () => {
  return (
    <View style={[commonStyles.bgLighter, styles.reviewsSummary]}>
      <View style={styles.rsCol}>
        <Text style={styles.rsScore}>4.1/5</Text>
        <Text style={[commonStyles.muted, styles.rsBase]}>Based on 4 reviews</Text>

        <View style={commonStyles.starBar}>
          <FontAwesomeIcon style={commonStyles.star} icon="fa-solid fa-star" />
          <FontAwesomeIcon style={commonStyles.star} icon="fa-solid fa-star" />
          <FontAwesomeIcon style={commonStyles.star} icon="fa-solid fa-star" />
          <FontAwesomeIcon style={commonStyles.star} icon="fa-solid fa-star" />
          <FontAwesomeIcon
            style={commonStyles.unStar}
            icon="fa-solid fa-star"
          />
        </View>
      </View>

      <View style={styles.rsCol}>
        <View style={styles.starBar}>
          <Text>5 star</Text>
          <View style={styles.bar}>
            <View style={styles.barFill1}></View>
          </View>
        </View>

        <View style={styles.starBar}>
          <Text>4 star</Text>
          <View style={styles.bar}>
            <View style={styles.barFill2}></View>
          </View>
        </View>

        <View style={styles.starBar}>
          <Text>3 star</Text>
          <View style={styles.bar} />
        </View>

        <View style={styles.starBar}>
          <Text>2 star</Text>
          <View style={styles.bar} />
        </View>

        <View style={styles.starBar}>
          <Text>1 star</Text>
          <View style={styles.bar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsSummary: {
    flexDirection: 'row',
    marginVertical: 30,
    padding: 20,
  },
  rsCol: {
    flex: 1,
  },
  rsScore: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  rsBase: {
    marginBottom: 50,
  },
  bar: {
    flex: 1,
    backgroundColor: 'rgb(200, 200, 200)',
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    height: 10,
  },
  barFill1: {
    flex: 1,
    width: '75%',
    backgroundColor: '#4226F1',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  barFill2: {
    flex: 1,
    width: '25%',
    backgroundColor: '#4226F1',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export default Reviews;
