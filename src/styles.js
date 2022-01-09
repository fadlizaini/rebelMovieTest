import {StyleSheet, Dimensions} from 'react-native';
import {background, blue, white} from './colour';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  screenContainer: {
    width,
    height,
    backgroundColor: background,
    alignItems: 'center',
  },

  headerContainer: {
    width,
    height:'100%',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  headerContentContainer: {
    marginLeft: 15,
    marginBottom: 43,
    alignItems: 'flex-start',
  },
  genreTagContainer: {
    backgroundColor: 'rgba(15, 239, 253, 0.1)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderTopLeftRadius: 13,
    borderBottomRightRadius: 13,
    marginTop: 34,
    marginBottom: 12,
  },

  //text

  textWhite: {
    color: white,
  },
  textBold: {fontWeight: 700},
  genreTagText: {
    fontSize: 10,
    color: blue,
  },
  textHeaderTitle: {
    color: white,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
});

export default styles;
