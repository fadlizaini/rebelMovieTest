import React, {useEffect} from 'react';
import {View, FlatList, Image, Dimensions, Text} from 'react-native';
import {imageUrl} from '../../../url';
import {ICON_REBEL} from '../../../assets/images';
import styles from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
const {height, width} = Dimensions.get('window');

export default function HomeHeader(props) {
  const {movies} = props;
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={{uri: `${imageUrl}${item.backdrop_path}`}}
          style={{backgroundColor: 'red', position: 'absolute'}}
          width={'100%'}
          height={'100%'}
        />
        <View style={styles.headerContentContainer}>
          <Image source={ICON_REBEL} height={32} style={{height: 32}} />
          <View style={styles.genreTagContainer}>
            <Text style={styles.genreTagText}>
              {item.genre !== undefined && item.genre[0]?.name}
            </Text>
          </View>
          <Text style={styles.textHeaderTitle}>{item.title}</Text>
          <CustomButton
            onPress={() => props.navigation.navigate('detail')}
            title="Watch Now"
          />
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
