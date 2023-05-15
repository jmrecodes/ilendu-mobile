import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  flexBetween: {
    justifyContent: 'space-between',
  },
  flexSpaceEven: {
    justifyContent: 'space-evenly',
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  white: {
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  alignCenter: {
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  box: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgb(200, 200, 200)',
    paddingVertical: 15,
    marginBottom: 30,
  },
  colored: {
    color: '#4226F1',
  },
  starBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    color: '#4226F1',
    marginRight: 5,
  },
  unStar: {
    color: 'rgb(150, 150, 150)',
  },
  muted: {
    color: 'rgb(150, 150, 150)',
  },
  bgLighter: {
    backgroundColor: 'rgb(240, 240, 240)',
  },
  h1: {
    fontWeight: '500',
    fontSize: 20,
  },
  h2: {
    fontWeight: '400',
    fontSize: 18,
  },
  h3: {
    fontWeight: '400',
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
  silent: {
    color: '#444',
  },
  paddingVerticalSmall: {
    paddingVertical: 10,
  },
  paddingVertical: {
    paddingVertical: 15,
  },
  beautifulBox: {
    //backgroundColor: this is required
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 24,
  },
  light: {
    color: '#eee',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  mt1: {
    marginTop: 5,
  },
  mt2: {
    marginTop: 15,
  },
});

export default commonStyles;
