import React from 'react';
import {FlatList, Text, Image, View} from 'react-native';
import styles from '../../../styles';
import {imageUrl} from '../../../url';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {yellow} from '../../../colour';

export default function MovieList(props) {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginRight: 10,
          width: 160,
          height: 220,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: 10,
        }}>
        <Image
          style={{height: '100%', width: '100%', position: 'absolute'}}
          width={160}
          height={220}
          source={{uri: `${imageUrl}${item.poster_path}`}}
        />
        <View
          style={[styles.genreTagContainer, {marginTop: 0, marginBottom: 8}]}>
          <Text style={styles.genreTagText}>
            {item.genre !== undefined && item.genre[0]?.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 6.5}}>
          <MaterialIcons name={'star-rate'} />
          <MaterialIcons name={'star-rate'} />
          <MaterialIcons name={'star-rate'} />
          <MaterialIcons name={'star-rate'} />
          <MaterialIcons name={'star-rate'} />
        </View>
        <Text style={styles.textList}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 15,
          marginRight: 22.4,
          marginBottom: 15,
        }}>
        <Text style={styles.textListTitle}>New Release</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.textSeeAll, {marginRight: 16.67}]}>See All</Text>
          <MaterialIcons name="chevron-right" size={22} color={yellow} />
        </View>
      </View>

      <FlatList
        style={{marginTop: 15}}
        data={props.data}
        keyExtractor={item => item.id}
        style={{paddingLeft: 15}}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
}
