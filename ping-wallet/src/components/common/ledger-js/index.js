/*
 * @Author: dingyiming
 * @Date: 2020-02-19 17:28:46
 * @LastEditTime: 2020-02-23 01:04:53
 * @FilePath: /ping-wallet/ping-wallet/src/components/common/ledger-js/index.js
 */
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import CosmosApp from "ledger-cosmos-js";

const getTransport = async () => {
  let transport = null;
  console.log(`Trying to connect via Web USB...`);
  try {
    transport = await TransportWebUSB.create();
  } catch (e) {
    console.log(e);
  }
  return transport;
}

const getLedgerApp = async () => {
  // Given a transport (U2F/HIF/WebUSB) it is possible instantiate the app
  const transport = await getTransport();
  const app = new CosmosApp(transport);
  // now it is possible to access all commands in the app
  console.log("Please click in the device");
  return app
}

export default {
  getLedger: () => {
    console.log(123)
  },
  getAddress: async () => {
    const app = await getLedgerApp()
    // const path = [44, 118, 5, 0, 3];
    // [bip44 , , 钱包, , 序列]
    const path = [44, 118, 0, 0, 0];
    const response = await app.getAddressAndPubKey(path, "cosmos");
    if (response.return_code !== 0x9000) {
      console.log(`Error [${response.return_code}] ${response.error_message}`);
      return;
    }
    console.log("Response received!");
    console.log(
      `App Version ${response.major}.${response.minor}.${response.patch}`
    );
    console.log(`Device Locked: ${response.device_locked}`);
    console.log(`Test mode: ${response.test_mode}`);
    console.log("Full response:");
    console.log(response);
    return response
  }
}