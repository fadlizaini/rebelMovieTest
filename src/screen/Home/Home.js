import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {background} from '../../colour';
import {getGenre, getMovie} from '../../service/service.home';
import styles from '../../styles';
import HomeHeader from '../../components/HomeHeader';
import MovieList from '../../components/MovieList';
const {height, width} = Dimensions.get('window');

export default function Home(props) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (
      genres.length > 0 &&
      movies.length > 0 &&
      movies[0]?.genre === undefined
    ) {
      setMoviesGenres();
    }
  }, [genres, movies]);

  function onLoad() {
    getGenre()
      .then(res => {
        setGenres(res.data.genres);
      })
      .catch(e => JSON.stringify(e, null, 2));

    getMovie()
      .then(async res => {
        setMovies(res.data.results);
        setHeaderData(res.data.results.slice(0, 3));
      })
      .catch(e => JSON.stringify(e, null, 2));
  }

  function setMoviesGenres(moviee = movies) {
    moviee.forEach(async (m, i) => {
      moviee[i].genre = genres.filter(function (genre) {
        return genre.id === moviee[i].genre_ids[0];
      });
    });
    return moviee;
  }

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.screenContainer]}>
        <View style={{height: 280}}>
          <HomeHeader
            movies={headerData}
            navigation={props.navigation}
            onPress={id => props.navigation.navigate('detail', {id})}
          />
        </View>
        <MovieList
          data={movies}
          onPress={id => props.navigation.navigate('detail', {id})}
        />
      </View>
    </ScrollView>
  );
}
