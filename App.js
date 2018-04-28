import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  KeyboardAvoidingView, 
  Platform, 
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import getWeatherImage from './utils/getWeatherImage';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source="./assets/cloudy.png"
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.h1, styles.textStyles]}>College Park</Text>
            <Text style={[styles.h2, styles.textStyle]}>Cloudy</Text>
            <Text style={[styles.h1, styles.textStyle]}>24°</Text>

            <SearchInput placeholder="Search for a city" />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  imageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
      color: 'white',
    }),
  },
  h1: {
    fontSize: 44,
  },
  h2:{
    fontSize: 18,
  },
});
