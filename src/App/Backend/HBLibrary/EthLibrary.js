import bip39 from 'bip39'
import bitcoin from 'bitcoinjs-lib-zcash'
import CryptoJS from 'crypto-js'

export default class EtherLibrary {
  static generateWallet (mnemonic, index) {
    if (!mnemonic) {
      mnemonic = bip39.generateMnemonic()
    }
    var masterSeed = bip39.mnemonicToSeed(mnemonic)
    // Depth = 0
    var rootNodeBase58 = bitcoin.HDNode.fromSeedHex(masterSeed, null).toBase58()
    var rootNode = bitcoin.HDNode.fromBase58(rootNodeBase58, null)
    // Depth = 1
    var accountNodeBase58 = derive(derive(derive(rootNode, 44, true), 60, true), 0, true).toBase58()
    var accountNode = bitcoin.HDNode.fromBase58(accountNodeBase58, null)
    // Depth = 2
    var receiveNodeBase58 = derive(accountNode, 0, false).toBase58()
    var receiveNode = bitcoin.HDNode.fromBase58(receiveNodeBase58, null)
    var currentReceiveAddress = getCoinAddress(derive(receiveNode, index, false)).toString()

    var fromNode = getNode(mnemonic, index)
    var privatekey = getPrivateKey(fromNode, false, index).d.toBuffer(32).toString('hex')
    return { currentReceiveAddress, privatekey, mnemonic }
  }
}

function getPrivateKey (node, internal, index) {
  return derive(node, index, false).keyPair
}

function derive (node, index, hardened) {
  return (hardened) ? node.deriveHardened(index) : node.derive(index)
}

function getCoinAddress (node) {
  var ethKeyPair = node.keyPair
  var prevCompressed = ethKeyPair.compressed
  ethKeyPair.compressed = false
  var ethKeyPairPublicKey = ethKeyPair.getPublicKeyBuffer()
  var pubKeyHexEth = ethKeyPairPublicKey.toString('hex').slice(2)
  var pubKeyWordArrayEth = CryptoJS.enc.Hex.parse(pubKeyHexEth)
  var hashEth = CryptoJS.SHA3(pubKeyWordArrayEth, { outputLength: 256 })
  var addressEth = hashEth.toString(CryptoJS.enc.Hex).slice(24)
  ethKeyPair.compressed = prevCompressed
  var address = '0x' + addressEth
  return address
}

function getNode (mnemonic, index) {
  var seedHex = bip39.mnemonicToSeedHex(mnemonic)
  // Depth = 0
  var rootNodeBase58 = bitcoin.HDNode.fromSeedHex(seedHex, null).toBase58()
  var rootNode = bitcoin.HDNode.fromBase58(rootNodeBase58, null)
  // Depth = 1
  var accountNodeBase58 = derive(derive(derive(rootNode, 44, true), 60, true), 0, true).toBase58()
  var accountNode = bitcoin.HDNode.fromBase58(accountNodeBase58, null)
  // Depth = 2
  var receiveNodeBase58 = derive(accountNode, 0, false).toBase58()
  var receiveNode = bitcoin.HDNode.fromBase58(receiveNodeBase58, null)
  return receiveNode
}
