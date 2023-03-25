import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './commonStyles';

const BorrowPeriod = () => {
  return (
    <View style={commonStyles.paddingHorizontal}>
      <Text style={[commonStyles.bold, commonStyles.alignCenter]}>
        SELECT PERIOD FOR BORROWING
      </Text>
      <View
        style={[commonStyles.box, styles.dateCon]}>
        <View style={styles.dateSubCon}>
          <FontAwesomeIcon
            style={styles.location}
            icon="fa-solid fa-download"
          />
          <View style={styles.dateText}>
            <Text>Thu, 11 Aug.</Text>
            <Text>Mon, 15 Aug.</Text>
          </View>
        </View>

        <Text style={[commonStyles.colored, {lineHeight: 22}]} >
          Change
          <FontAwesomeIcon
            style={commonStyles.colored}
            icon="fa-solid fa-chevron-right"
          />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateSubCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  dateText: {
    marginLeft: 15,
  },
});

export default BorrowPeriod;
