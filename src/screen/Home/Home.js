import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {getGenre, getMovie} from '../../service/service.home';
import styles from '../../styles';
import HomeHeader from './components/HomeHeader';
const {height, width} = Dimensions.get('window');

export default function Home(props) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    console.log(genres.length > 0, movies.length > 0);
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
        console.log('genres', res.data);
        setGenres(res.data.genres);
      })
      .catch(e => JSON.stringify(e, null, 2));

    getMovie()
      .then(async res => {
        console.log('movie', res.data.results);
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
    console.log('movieee', moviee);
    return moviee;
  }

  return (
    <View style={[styles.screenContainer]}>
      <View style={{height: height / 3}}>
        <HomeHeader movies={headerData} navigation={props.navigation} />
      </View>
    </View>
  );
}
