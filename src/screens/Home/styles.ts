import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    width: wp(100) - 32,
    height: 175,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
  image: {
    width: wp(100) - 32,
    height: 175,
    borderRadius: 10,
  },
});
