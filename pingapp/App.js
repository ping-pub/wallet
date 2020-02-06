import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import { WebView } from 'react-native-webview';
import BluetoothTransport from "@ledgerhq/react-native-hw-transport-ble";

class App extends Component {
  startScan = async () => {
    Alert.alert('111');
    const sub = BluetoothTransport.listen({
      complete: () => {
        // this.setState({ refreshing: false });
        Alert.alert('111');
      },
      next: e => {
        Alert.alert(e);
        if (e.type === "add") {
          // clearTimeout(this.timeout);
          const device = e.descriptor;
          console.log(device)
          // this.setState(({ devices }) => ({
          //   // FIXME seems like we have dup. ideally we'll remove them on the listen side!
          //   devices: devices.some(i => i.id === device.id)
          //     ? devices
          //     : devices.concat(device),
          // }));
        }
      },
      error: error => {
        Alert.alert(error);
      },
    });
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
