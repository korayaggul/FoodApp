import { useSelector} from 'react-redux';

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const Main = useSelector(x => x.color.Main);

const baseColors = {
  none: Main,
  black: Main,
  niagara: '#09B2AF',
};

const colors = {
  none: baseColors.none,
  black: baseColors.black,
  white: baseColors.white,
  primary: baseColors.blueCharcoal,
  secondary: baseColors.janna,
  warning: baseColors.burntSienna,
  success: baseColors.chateauGreen,
  searchInput: baseColors.charlotte,
  settingButton: baseColors.niagara,
  modes: {
    dark: {
      primary: baseColors.blueCharcoal,
      secondary: baseColors.janna,
    },
  },
};

const radii = {
  normal: 3,
  full: 9999,
};

export default {
  space,
  baseColors,
  colors,
  radii,
};