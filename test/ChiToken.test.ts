import { expect } from "chai";
import { Contract } from "ethers";
import { ethers, waffle } from "hardhat";

describe("SettlementStorageReader", () => {
  const [account] = waffle.provider.getWallets();
  let chiToken: Contract;
  let gasGuzzler: Contract;

  beforeEach(async () => {
    const ChiToken = await ethers.getContractFactory(
      "ChiToken",
      account,
    );
    const GasGuzzler = await ethers.getContractFactory(
      "GasGuzzler",
      account,
    );

    chiToken = await ChiToken.deploy();
    gasGuzzler = await GasGuzzler.deploy(chiToken.address);
  });

    it("uses less gas when burning gas tokens", async () => {
      // Make sure GasGuzzler can free chi tokens
      await chiToken.connect(account).mint(100);
      await chiToken.connect(account).transfer(gasGuzzler.address, 100);

      let tx_without_chi = await gasGuzzler.connect(account).setSotrageAndFreeChiToken(20, 0);
      let tx_with_chi = await gasGuzzler.connect(account).setSotrageAndFreeChiToken(20, 5);

      let tx_without_chi_receipt = await tx_without_chi.wait();
      let tx_with_chi_receipt = await tx_with_chi.wait();

      expect(
        tx_without_chi_receipt.gasUsed,
      ).to.be.gt(tx_with_chi_receipt.gasUsed);
    });
});
