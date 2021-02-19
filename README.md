# Testable ChiToken

A copy of the [1Inch ChiToken](https://github.com/1inch-exchange/chi) that doesn't depend on the hardcoded deployer address to work but instead can be used with arbitrary networks/deployments.

### Running the Code

```
yarn hardhat compile
yarn hardhat test
```

### Usage

This is an example of how to use the testable ChiToken in some other hardhat project. First depend on it via yarn or npm:

`yarn add -D @gnosis.pm/testable-chi-token`

Then, to instantiate the testable chi token:

```ts
import ChiToken from "@gnosis.pm/testable-chi-token/build/artifacts/src/contracts/ChiToken.sol/ChiToken.json"
import { waffle } from "hardhat"

//...

const chiToken = await waffle.deployContract(deployer, ChiToken)
```

The deployer can be an arbitrary address
