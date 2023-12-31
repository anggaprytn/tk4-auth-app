import { defaultColors } from '@/themes';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { hexToRGBA } from '@/utils/helpers';

const statusBarHeight = getStatusBarHeight();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    height: 200 + statusBarHeight,
    width: wp(100),
  },
  containerTextImage: {
    marginTop: statusBarHeight,
    height: 200,
    width: wp(100),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: { alignItems: 'center' },
  btnGoogle: {
    width: wp(100) - 32,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: hexToRGBA(defaultColors.grayText, 0.4),
    borderRadius: 99,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  containerIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerr: { justifyContent: 'center', alignItems: 'center' },
});
