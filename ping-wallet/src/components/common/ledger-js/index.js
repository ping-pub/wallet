/*
 * @Author: dingyiming
 * @Date: 2020-02-19 17:28:46
 * @LastEditTime: 2020-02-19 17:32:19
 * @FilePath: /ping-wallet/ping-wallet/src/components/common/ledger-js/index.js
 */
import eip55 from "eip55";
import TransportWebBLE from "@ledgerhq/hw-transport-web-ble";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import AppEth from "@ledgerhq/hw-app-eth";

export default async () => {
  let transport = await TransportWebBLE.create();
  window.ledgerTransport = transport;
  transport.on("disconnect", () => {
    transport = null
  });
}