import * as React from 'react';
import {View} from 'react-native';
import styles from './AppWeb.styles';
// import {NAMESPACE} from './AppWeb.constants';
import {WebView} from 'react-native-webview';
import {music1} from './sources/web';
// const web = require('./sources/web.html');
function AppWebView() {
  return (
    <View style={styles.container}>
      {/* <AppText>AppWeb</AppText> */}
      <WebView
        allowUniversalAccessFromFileURLs={true}
        allowFileAccess
        allowsLinkPreview
        allowsInlineMediaPlayback
        allowFileAccessFromFileURLs={true}
        style={styles.container}
        source={{html: music1}}
        cacheEnabled
        javaScriptEnabled
        mediaPlaybackRequiresUserAction
      />
    </View>
  );
}

export default React.memo(AppWebView);
