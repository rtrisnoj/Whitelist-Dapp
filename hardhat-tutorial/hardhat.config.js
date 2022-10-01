require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = "https://serene-maximum-scion.ethereum-goerli.discover.quiknode.pro/ebbd8dd60b03ae73fcfb1eb55b19df3cc501e8ee/";
const PRIVATE_KEY = "77e908187dce34a0e9aa0945d76d89a7158079653de25437aa0660310ddb775f";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};