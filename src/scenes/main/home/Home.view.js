import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './Home.styles';
import withLoading from 'components/HOC/withLoading';
import Player from './components/Player';
import {TouchableOpacity} from 'react-native'

function HomeView(props) {
  const { skipToNext, skipToPrevious, togglePlayback, playbackState, getTrack} = props;
  return (
    <View style={styles.container}>
    <Text style={styles.description}>
      We'll be inserting a playlist into the library loaded from
      `playlist.json`. We'll also be using the `ProgressComponent` which
      allows us to track playback time.
    </Text>
    <Player
      onNext={skipToNext}
      style={styles.player}
      onPrevious={skipToPrevious}
      onTogglePlayback={togglePlayback}
    />
    <Text style={styles.state}>{(playbackState)}</Text>
    <TouchableOpacity style={{backgroundColor:'red', padding: 10}} onPress={getTrack}>
      <Text>getTrack</Text>
    </TouchableOpacity>
  </View>
  );
}

export default withLoading(HomeView);
