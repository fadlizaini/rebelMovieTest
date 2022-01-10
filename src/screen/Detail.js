import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {dark} from '../colour';
import {getDetail} from '../service/service.detail';
import styles from '../styles';
import HomeHeader from './Home/components/HomeHeader';

const {height, width} = Dimensions.get('window');

export default function Detail(props) {
  const {id} = props.route.params;
  const [headerData, setHeaderData] = useState([]);
  useEffect(() => {
    onLoad();
  }, []);
  function onLoad() {
    getDetail(id)
      .then(res => {
        console.log(res.data);
        setHeaderData([res.data]);
      })
      .catch(e => console.log(e));
  }
  return (
    <View style={styles.screenContainer}>
      <View style={{height: 280}}>
        <HomeHeader
          movies={headerData}
          navigation={props.navigation}
          isDetail
        />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          paddingVertical: 20,
          paddingHorizontal: 15,
          width: '100%',
        }}>
        <Text style={styles.textListTitle}>Synopsis</Text>
        <View style={{backgroundColor: dark, padding: 15}}>
          <Text>{headerData[0]?.overview ?? ''}</Text>
        </View>
      </View>
    </View>
  );
}
