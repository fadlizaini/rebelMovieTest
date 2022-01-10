import {StyleSheet, Dimensions} from 'react-native';
import {background, blue, white, yellow} from './colour';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  screenContainer: {
    width,
    alignItems: 'center',
    paddingBottom: 20,
  },
  scrollContainer: {width, height, backgroundColor: background},
  headerContainer: {
    width,
    height: '100%',
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContentContainer: {
    marginLeft: 15,
    marginBottom: 43,
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  genreTagContainer: {
    backgroundColor: 'rgba(15, 239, 253, 0.1)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 34,
    marginBottom: 12,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: white,
    opacity: 0.1,
  },
  movieListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 22.4,
    marginBottom: 15,
  },
  movieListItemContainer: {
    marginRight: 10,
    width: 160,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
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
  textListTitle: {
    color: white,
    fontSize: 20,
    fontWeight: '700',
  },
  textSeeAll: {
    color: yellow,
    fontSize: 14,
    fontWeight: '700',
  },
  textList: {
    color: white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
