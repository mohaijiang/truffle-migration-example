const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

const Logic1 = artifacts.require("Logic1")
const SimpleUpgrade = artifacts.require("SimpleUpgrade")

module.exports = function(deployer) {
  deployer.deploy(Logic1).then(() => {
    return deployer.deploy(SimpleUpgrade,Logic1.address)
  })
};
