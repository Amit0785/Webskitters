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
});

export default styles;
