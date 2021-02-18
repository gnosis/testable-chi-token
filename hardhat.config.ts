import "@nomiclabs/hardhat-waffle";

export default {
  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    deploy: "src/deploy",
    sources: "src/contracts",
  },
  solidity: "0.7.6",
};
