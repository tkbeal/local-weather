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
  constructor (props) {
    super(props);
    this.state = {
      location: 'College Park',
    };
  }

  handleUpdateLocation = (city) => {
    this.setState({
      location: city,
    });
  };

  render() {
    const {location} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source={require('./assets/weather-images/cloudy.png')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.h1, styles.textStyle]}>{location}</Text>
            <Text style={[styles.h2, styles.textStyle]}>Cloudy</Text>
            <Text style={[styles.h1, styles.textStyle]}>24°</Text>

            <SearchInput 
              placeholder="Search for a city..." 
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'white',
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
