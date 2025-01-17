import {RFValue} from 'react-native-responsive-fontsize';
import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {
  black: '#000000',
  lightblack: '#3D373A',
  sblack: '#303030',
  darkblack: '#310436',
  white: '#fff',
  pink: '#FC0270',
  bgColor: '#F4F4F4',
  lightgray: '#8E878A',
  gray: '#656565',
  light: '#B9B0B4',
  PlatinumGray: '#797979',
  toneblack: '#1D1D1D',
  toneblack2: '#232323',
  fontColor: '#847D80',
  baba: '#BABABA',
  shadegray: '#8A8A8A ',
  shadegray1: '#8C7F85',
  paynesgray: '#44444A',
  dark: '#45373d',
  gray2: '#AEAEAE',
  shadepink: '#A5939B',
  shade1: '#83727A',
  Sandstone: '#6F6569',
  gray3: '#827A7D',
  csilver: '#CCCCCC',
  Tgray: '#888888',
  appsilver: '#C5C5C5',
  bm: '#ABA4A7',
  darkgray: '#464646',
  silver: '#BEBEBE',
  appgray: '#7E7E7E',
  gray1: '#808080',
  Tundora: '#423F40',
  brightgray: '#EAEAEA ',
  soniksilver: '#757575',
  green: '#329C0C',
  pigpink: '#FFD9EA',
  razzmatazz: '#EC1E79',
  Strawberry: '#FE2283',
  googleColor: '#ED5634',
  facebookColor: '#4155DA',
  textColor1: '#6A6B73',
  red2: '#EF2D56',
  red: '#FF0000',

  statusbarColor: '#000',
  boxColor: '#2D2D2D',
  appColor: '#FFD232',
  appColor2: '#FF9B04',
  textColor2: '#FFFFFF',
  textColor1: '#F4C727',
  backgroundColor: '#000000',
  borderColor: '#EFBB00',
  placeholderColor: '#424447',
  placeholderColor2: '#EAE6E6',
  lightYellow: '#FFEFBF',
  backgroundColor2: '#6A6B73',
  successGreen: '#2BF427',
  failureRed: '#F42727',
  green2: '#303E1A',
  red3: '#360E0E',

  fontColor: '#000',
  buttomTextColor1: '#fff',
  dimColor: '#748086',
  dim: '#777',
  buttomTextColor: '#2E4497',
  borderColor2: '#7C7C7C',
  bronze: '#CD7F32',
  bronze2: '#C8A47B',
  silver: '#A6A6A6',
  gold: '#D0A933',
  gold2: '#E4CD7D',
};

const FONTSIZE = {
  EXTRALARGE: Platform.OS == 'ios' ? RFValue(20) : RFValue(22),
  BIG: Platform.OS == 'ios' ? RFValue(18) : RFValue(20),
  LARGE: Platform.OS == 'ios' ? RFValue(16) : RFValue(18),
  MEDIUM: Platform.OS == 'ios' ? RFValue(14) : RFValue(16),
  SMALL: Platform.OS == 'ios' ? RFValue(12) : RFValue(14),
  SMALLER: Platform.OS == 'ios' ? RFValue(11) : RFValue(12),
  SMALLEST: Platform.OS == 'ios' ? RFValue(9) : RFValue(10),
  MINI: Platform.OS == 'ios' ? RFValue(8) : RFValue(9),
  MINIMUM: Platform.OS == 'ios' ? RFValue(7) : RFValue(7),
};

const WIDTH = width;
const HEIGHT = height;

export {COLORS, FONTSIZE, WIDTH, HEIGHT};