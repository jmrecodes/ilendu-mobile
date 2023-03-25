import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import commonStyles from './commonStyles';

const Location = () => {
  return (
    <View style={commonStyles.paddingHorizontal}>
      <Text style={[commonStyles.bold, commonStyles.alignCenter]}>
        SUGGESTED PICK UP & RETURN LOCATION
      </Text>
      <View
        style={[commonStyles.box, styles.locationSubCon, styles.locationCon]}>
        <View style={styles.locationSubCon}>
          <FontAwesomeIcon
            style={styles.location}
            icon="fa-solid fa-download"
          />
          <Text style={styles.locationText}>Los Angeles, CA 93471</Text>
        </View>

        <FontAwesomeIcon
          style={commonStyles.colored}
          icon="fa-solid fa-chevron-right"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationSubCon: {
    flexDirection: 'row',
  },
  locationCon: {
    justifyContent: 'space-between',
  },
  location: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  locationText: {
    marginLeft: 15,
  },
});

export default Location;
