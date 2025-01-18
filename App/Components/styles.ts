import {StyleSheet, Dimensions, Platform} from 'react-native';
import {FONTSIZE, COLORS, WIDTH, HEIGHT} from '../Common/Themes';

const styles = StyleSheet.create({
  errorTextStyle: {
    marginTop: 5,
    color: COLORS.red,
    fontWeight: '400',
    fontSize: FONTSIZE.SMALL,
    alignSelf: 'center',
  },
  customButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: COLORS.borderColor,
  },
  buttonText: {
    textAlign: 'center',
    //lineHeight: 53,
    color: '#231F20',
    fontWeight: 'bold',

    fontSize: FONTSIZE.BIG,
  },
  division: {
    alignSelf: 'center',
    borderRadius: 7,
    backgroundColor: COLORS.white,
    height: 50,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    color: COLORS.black,
    fontWeight: '400',
    fontSize: FONTSIZE.MEDIUM,
  },
  imgBox: {
    height: 20,
    width: 50,
    alignSelf: 'center',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: COLORS.borderColor,
    borderRightWidth: 1,
  },
  textStyle: {
    marginTop: 5,
    color: '#ff0000',
    fontWeight: '400',
    fontSize: FONTSIZE.SMALL,
    alignSelf: 'center',
  },
});

export default styles;
