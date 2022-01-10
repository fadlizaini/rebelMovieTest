import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, ScrollView, RefreshControl} from 'react-native';
import {dark, yellow} from '../colour';
import {getCredits, getDetail, getSimilar} from '../service/service.detail';
import styles from '../styles';
import HomeHeader from '../components/HomeHeader';
import MovieList from '../components/MovieList';

const {height, width} = Dimensions.get('window');

export default function Detail(props) {
  const [id, setId] = useState(props.route.params.id);
  const [refreshing, setRefreshing] = useState(true);
  const [headerData, setHeaderData] = useState([]);
  const [creditsData, setCreditsData] = useState({cast: [], crew: []});
  const [castDisplayData, setCastDisplayData] = useState([]);
  const [similarData, setSimilarData] = useState([]);

  useEffect(() => {
    onLoad();
  }, [id]);
  function onLoad() {
    getDetail(id)
      .then(res => {
        setHeaderData([res.data]);
      })
      .catch(e => console.log(e));
    getCredits(id)
      .then(res => {
        setCastDisplayData(res.data.cast.slice(0, 3));
      })
      .catch(e => {
        console.log(e);
      });
    getSimilar(id)
      .then(res => {
        setSimilarData(res.data.results);
        setRefreshing(false);
      })
      .catch(e => {
        console.log(e);
        setRefreshing(false);
      });
  }
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          onRefresh={() => {
            onLoad();
          }}
          refreshing={refreshing}
        />
      }>
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
          <View
            style={{
              backgroundColor: dark,
              padding: 15,
              width: '100%',
              marginTop: 15,
            }}>
            <Text style={[styles.textWhite, {opacity: 0.6}]}>
              {headerData[0]?.overview ?? ''}
            </Text>
          </View>
          <Text style={[styles.textWhite, {marginTop: 15, flexWrap: 'nowrap'}]}>
            Cast :{' '}
            <Text style={{fontWeight: '700', flex: 1}}>
              {castDisplayData.map(item => {
                return `${item.name}, `;
              })}
            </Text>{' '}
            <Text style={{fontWeight: '700', color: yellow}}>more</Text>
          </Text>
        </View>
        <View style={styles.divider} />
        <MovieList
          data={similarData}
          isDetail
          onPress={id => {
            setId(id);
            setRefreshing(true);
          }}
        />
      </View>
    </ScrollView>
  );
}
