import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

this.state = {
  markers: [
    {
      title: 'Phoenix Market City',
      coordinates: {
        latitude: 12.9905076223,
        longitude: 80.2168464661,
      },
    },
    {
      title: 'Guindy National Park',
      coordinates: {
        latitude: 13.0022995323,
        longitude: 80.2286151123,
      },
    },
    {
      title: 'Ashok Pillar',
      coordinates: {
        latitude: 13.0349969479,
        longitude: 80.2120399475,
      },
    },
    {
      title: 'Anna Salai',
      coordinates: {
        latitude: 13.0312340623,
        longitude: 80.2405357361,
      },
    },
  ],
  search: '',
};

const App = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 13.0022995323,
    longitude: 80.2286151123,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{ top: '10' }}
          onChangeText={(search) => this.setState({ search })}
        />
      </View>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        {this.state.markers.map((marker) => (
          <MapView.Marker
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
      </MapView>
    <View>
    
    </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
