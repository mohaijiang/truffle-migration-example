
const Logic2 = artifacts.require("Logic2")
const SimpleUpgrade = artifacts.require("SimpleUpgrade")


module.exports =  async function(deployer) {
    await deployer.deploy(Logic2);
    simpleInstance = await SimpleUpgrade.deployed();
    return simpleInstance.upgrade(Logic2.address)
};
