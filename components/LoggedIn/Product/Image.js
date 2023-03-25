import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Image = () => {
  return (
    <View style={styles.imageCon}>
      <ImageBackground
        source={require('../../../images/image-regular.png')}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={styles.image}>
        <View style={styles.daysCon}>
          <Text style={styles.days}>5 days on ilendu</Text>
        </View>

        <View style={styles.shareHeart}>
          <FontAwesomeIcon
            style={styles.icons}
            icon="fa-solid fa-arrow-up-from-bracket"
          />
          <FontAwesomeIcon
            style={styles.icons}
            icon="fa-regular fa-heart"
          />
        </View>
      </ImageBackground>
      <View style={styles.slideButtonsCon}>
        <FontAwesomeIcon
          style={styles.slideButtons}
          icon="fa-solid fa-circle"
        />
        <FontAwesomeIcon
          style={styles.slideButtons}
          icon="fa-regular fa-circle"
        />
        <FontAwesomeIcon
          style={[styles.slideButtons, styles.lastButton]}
          icon="fa-regular fa-circle"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  imageCon: {
    marginVertical: 20,
    height: 250,
    backgroundColor: 'rgb(220, 220, 220)',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    marginTop: 40,
    width: 150,
    height: 150,
    left: '50%',
    marginLeft: -75,
  },
  daysCon: {
    alignSelf: 'flex-start',
    backgroundColor: '#444',
    borderBottomRightRadius: 5,
    overflow: 'hidden',
  },
  days: {
    color: '#ddd',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderBottomRightRadius: 5,
  },
  shareHeart: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 20,
  },
  icons: {
    marginLeft: 10,
  },
  slideButtonsCon: {
    flexDirection: 'row',
    marginTop: 170,
  },
  slideButtons: {
    marginRight: 5,
  },
  lastButton: {
    marginRight: 0,
  },
});

export default Image;
