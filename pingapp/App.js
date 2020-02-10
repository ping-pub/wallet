import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import { WebView } from 'react-native-webview';
import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";

class App extends Component {
  startScan = async () => {
    Alert.alert('111');
    TransportBLE.listen({
      complete: () => {
        this.setState({ refreshing: false });
      },
      next: e => {
        if (e.type === "add") {
          const device = e.descriptor;
          Alert.alert(device);
        }
      },
      error: error => {
        this.setState({ error, refreshing: false });
      }
    });
    // const subscription = TransportBLE.observeState({
    //   next: () => {

    //   },
    //   complete: () => { },
    //   error: () => { }
    // });
  };
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
            onPress={() => {
              this.startScan()
            }}
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
