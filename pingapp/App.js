import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <WebView
            source={{ uri: 'https://wallet.ping.pub' }}
          />
        </SafeAreaView>
      </>
    );
  }
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})
export default App;
