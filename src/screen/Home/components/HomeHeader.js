import React, {useEffect} from 'react';
import {View, FlatList, Image, Dimensions, Text} from 'react-native';
import {imageUrl} from '../../../url';
import {ICON_REBEL} from '../../../assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
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
          {!isDetail && (
            <Image source={ICON_REBEL} height={32} style={{height: 32}} />
          )}
          <View style={styles.genreTagContainer}>
            <Text style={styles.genreTagText}>
              {item.genre !== undefined && item.genre[0]?.name}
            </Text>
          </View>
          {isDetail && (
            <View style={{flexDirection: 'row', marginBottom: 6.5}}>
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <MaterialIcons name={'star-rate'} color="#fff" size={17} />
              <Text> • Release Year : {item.release_date.split('-', 1)}</Text>
            </View>
          )}
          <Text style={styles.textHeaderTitle}>{item.title}</Text>
          {!isDetail && (
            <CustomButton
              onPress={() => props.navigation.navigate('detail', {id: item.id})}
              title="Watch Now"
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      pagingEnabled
      horizontal
    />
  );
}
