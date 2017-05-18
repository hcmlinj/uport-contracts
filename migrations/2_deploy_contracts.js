const IdentityFactory = artifacts.require('./IdentityFactory.sol')
const UportRegistry = artifacts.require('./UportRegistry.sol')

module.exports = function (deployer, network) {
  deployer.deploy(IdentityFactory)
  deployer.deploy(UportRegistry)
}