import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
  MockLensHubV2BadRevision__factory,
  MockLensHubV2__factory,
  TransparentUpgradeableProxy__factory,
} from '../../typechain-types';
import { ERRORS } from '../helpers/errors';
import { abiCoder, deployer, lensHub, makeSuiteCleanRoom, user } from '../__setup.spec';

makeSuiteCleanRoom('Upgradeability', function () {
  const valueToSet = 123;

  it('Should fail to initialize an implementation with the same revision', async function () {
    const newImpl = await new MockLensHubV2BadRevision__factory(deployer).deploy();
    const proxyHub = TransparentUpgradeableProxy__factory.connect(lensHub.address, deployer);
    const hub = MockLensHubV2BadRevision__factory.connect(proxyHub.address, user);
    await expect(proxyHub.upgradeTo(newImpl.address)).to.not.be.reverted;
    await expect(hub.initialize(valueToSet)).to.be.revertedWith(ERRORS.INITIALIZED);
  });

  // The LensHub contract's last storage variable by default is at the 23nd slot (index 22) and contains the emergency admin
  // We're going to validate the first 23 slots and the 24rd slot before and after the change
  it("Should upgrade and set a new variable's value, previous storage is unchanged, new value is accurate", async function () {
    const newImpl = await new MockLensHubV2__factory(deployer).deploy();
    const proxyHub = TransparentUpgradeableProxy__factory.connect(lensHub.address, deployer);

    let prevStorage: string[] = [];
<<<<<<< HEAD
    for (let i = 0; i < 24; i++) {
=======
    for (let i = 0; i < 23; i++) {
>>>>>>> dd137b2 (Initial commit)
      const valueAt = await ethers.provider.getStorageAt(proxyHub.address, i);
      prevStorage.push(valueAt);
    }

<<<<<<< HEAD
    let prevNextSlot = await ethers.provider.getStorageAt(proxyHub.address, 24);
=======
    let prevNextSlot = await ethers.provider.getStorageAt(proxyHub.address, 23);
>>>>>>> dd137b2 (Initial commit)
    const formattedZero = abiCoder.encode(['uint256'], [0]);
    expect(prevNextSlot).to.eq(formattedZero);

    await proxyHub.upgradeTo(newImpl.address);
    await expect(
      MockLensHubV2__factory.connect(proxyHub.address, user).setAdditionalValue(valueToSet)
    ).to.not.be.reverted;

<<<<<<< HEAD
    for (let i = 0; i < 24; i++) {
=======
    for (let i = 0; i < 23; i++) {
>>>>>>> dd137b2 (Initial commit)
      const valueAt = await ethers.provider.getStorageAt(proxyHub.address, i);
      expect(valueAt).to.eq(prevStorage[i]);
    }

<<<<<<< HEAD
    const newNextSlot = await ethers.provider.getStorageAt(proxyHub.address, 24);
=======
    const newNextSlot = await ethers.provider.getStorageAt(proxyHub.address, 23);
>>>>>>> dd137b2 (Initial commit)
    const formattedValue = abiCoder.encode(['uint256'], [valueToSet]);
    expect(newNextSlot).to.eq(formattedValue);
  });
});
