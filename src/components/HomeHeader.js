import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {imageUrl} from '../url';
import {ICON_REBEL} from '../assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import CustomButton from './CustomButton';
import {white} from '../colour';
const {height, width} = Dimensions.get('window');

export default function HomeHeader(props) {
  const {movies, isDetail} = props;
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={{uri: `${imageUrl}${item.backdrop_path}`}}
          style={{position: 'absolute'}}
          width={'100%'}
          height={'100%'}
        />

        <View
          style={[
            styles.headerContentContainer,
            isDetail && {marginBottom: 0},
          ]}>
          {!isDetail ? (
            <View style={{position: 'absolute', top: 70}}>
              <Image source={ICON_REBEL} height={32} style={{height: 32}} />
            </View>
          ) : (
            <TouchableOpacity
              style={{position: 'absolute', top: 70}}
              onPress={() => props.navigation.goBack()}>
              <MaterialIcons
                name="chevron-left"
                size={35}
                color={white}
                style={{alignSelf: 'flex-start'}}
              />
            </TouchableOpacity>
          )}

          {item.genre !== undefined && (
            <View style={styles.genreTagContainer}>
              <Text style={styles.genreTagText}>{item.genre[0]?.name}</Text>
            </View>
          )}

          {isDetail && (
            <View style={{flexDirection: 'row', marginBottom: 6.5}}>
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <Text style={[styles.textWhite, {opacity: 0.6}]}>
                {' '}
                • Release Year : {item.release_date.split('-', 1)}
              </Text>
            </View>
          )}
          <Text style={styles.textHeaderTitle}>{item.title}</Text>
          {!isDetail && (
            <CustomButton
              onPress={() => props.onPress(item.id)}
              title="Watch Now"
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      pagingEnabled
      horizontal
    />
  );
}
