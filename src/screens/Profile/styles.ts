import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultColors } from '@/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  divider: {
    marginTop: 32,
    marginBottom: 16,
    width: wp(100) - 32,
  },
  mt8: { marginTop: 8 },
});
