import {
  pinkA200, pinkA700,
  pinkA100, pinkA400,
  greenA200,
  grey800, grey400,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Rubik, sans-serif',
  palette: {
    primary1Color: pinkA200,
    primary2Color: pinkA400,
    primary3Color: pinkA700,
    accent1Color: greenA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: grey800,
    secondaryTextColor: fade(fullWhite, 0.7),
    // alternateTextColor: '#303030',
    // canvasColor: fullWhite,
    // borderColor: fade(fullWhite, 0.3),
    disabledColor: grey400,
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};