import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flexBetween: {
    justifyContent: 'space-between',
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  bold: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  alignCenter: {
    textAlign: 'center',
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
});

export default commonStyles;
