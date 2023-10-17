import { defaultColors } from '@/themes';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
  btn: {
    marginTop: 16,
    width: wp(100) - 32,
    height: 50,
    justifyContent: 'center',
    backgroundColor: defaultColors.primary,
    borderRadius: 99,
    alignItems: 'center',
  },
  inputUser: {
    width: wp(100) - 32,
    marginTop: 16,
  },
  inputPassword: {
    width: wp(100) - 32,
    marginTop: 16,
  },
  center: { alignItems: 'center' },
  white: { color: 'white' },
});
