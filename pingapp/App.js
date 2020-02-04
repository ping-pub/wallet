import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button
} from 'react-native';

import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          {/* https://github.com/react-native-community/react-native-camera */}
          <Button
            title="扫一扫"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            title="蓝牙连接"
            color="#e66"
            accessibilityLabel="Learn more about this purple button"
          />
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
