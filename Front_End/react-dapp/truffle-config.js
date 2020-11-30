// const path = require("path");

// module.exports = {
//     // See <http://truffleframework.com/docs/advanced/configuration>
//     // to customize your Truffle configuration!
//     contracts_build_directory: path.join(__dirname, "client/src/contracts"),
//     networks: {
//         develop: {
//             port: 8545,
//         },
//     },
// };

// truffle.js config for klaytn.
// const PrivateKeyConnector = require("truffle-hdwallet-provider-klaytn");

// const path = require("path");
// const NETWORK_ID = "1001";
// const GASLIMIT = "20000000";
// const URL = "https://api.baobab.klaytn.net:8651";
// const PRIVATE_KEY =
//     "0x7fd553c3323b13bffd9c2a4809befe598c86d9debdb5c082f8a805bfdd33a8bf";

// module.exports = {
//     contracts_build_directory: path.join(__dirname, "client/src/contracts"),
//     networks: {
//         Klaytn: {
//             provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
//             network_id: NETWORK_ID,
//             gas: GASLIMIT,
//             gasPrice: null,
//         },
//     },
// };
