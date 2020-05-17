import React, {useEffect} from 'react';
import HomeView from './Home.view';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import { musicData } from 'services/dataLocal';

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}


export default function HomeContainer({navigation}) {
  const playbackState = usePlaybackState();

  

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(musicData);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function  getTrack(id) {
    try {
    TrackPlayer.getTrack('2222').then(track => {
    console.log('>>track', track);
    }).catch(err => {
      console.log('>>>err', err);
      
    });
    
    } catch (error) {
      
    }
  }

  useEffect(() => {
    setup();
  }, []);
  return (
    <HomeView togglePlayback={togglePlayback}
     playbackState={getStateName(playbackState)}
     skipToNext={skipToNext}
     skipToPrevious={skipToPrevious}
     getTrack={getTrack}
     />
  );
}
