import {StyleSheet, Text, View} from 'react-native';
import commonStyles from './commonStyles';

const Description = () => {
  return (
    <View style={commonStyles.paddingHorizontal}>
      <Text style={[commonStyles.bold, commonStyles.alignCenter]}>
        DESCRIPTION
      </Text>
      <View style={commonStyles.box}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Distinctio est neque quos velit. Aliquam consequuntur distinctio
          esse ex illo odit saepe sequi soluta temporibus ut...&nbsp;
          <Text style={[commonStyles.bold, styles.readMore]}>read more</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  readMore: {
    color: '#4226F1',
  },
});

export default Description;
