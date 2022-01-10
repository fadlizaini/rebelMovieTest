import React from 'react';
import {FlatList, Text, Image, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {imageUrl} from '../url';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {white, yellow} from '../colour';

export default function MovieList(props) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item.id)}
        style={styles.movieListItemContainer}>
        <Image
          style={{height: '100%', width: '100%', position: 'absolute'}}
          width={160}
          height={220}
          source={{uri: `${imageUrl}${item.poster_path}`}}
        />
        {item.genre !== undefined && (
          <View
            style={[styles.genreTagContainer, {marginTop: 0, marginBottom: 8}]}>
            <Text style={styles.genreTagText}>{item.genre[0]?.name}</Text>
          </View>
        )}

        <View style={{flexDirection: 'row', marginBottom: 6.5}}>
          <MaterialIcons name={'star-rate'} color={white} />
          <MaterialIcons name={'star-rate'} color={white} />
          <MaterialIcons name={'star-rate'} color={white} />
          <MaterialIcons name={'star-rate'} color={white} />
          <MaterialIcons name={'star-rate'} color={white} />
        </View>
        <Text style={styles.textList}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{marginTop: 20, width: '100%'}}>
      <View style={styles.movieListHeader}>
        <Text style={styles.textListTitle}>
          {props.isDetail ? 'You Might Also Like This' : 'New Release'}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.textSeeAll, {marginRight: 16.67}]}>See All</Text>
          <MaterialIcons name="chevron-right" size={22} color={yellow} />
        </View>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        style={{paddingLeft: 15}}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
}
