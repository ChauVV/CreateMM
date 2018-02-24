import Settings from '../../settings'
import QueryString from 'query-string'

export default class EtherscanServices {
  /**
   * getMultipleEthBalance() returns balances of the multiple accounts
   * based on the passed-in ethereum addresses array
   */
  static getApiMultipleEthBalance (...ethAddresses) {
    let queryStr = QueryString.stringify({
      module: 'account',
      action: 'balancemulti',
      address: ethAddresses.join(),
      tag: 'latest'
    })
    let apiurl = Settings.server.etherscan.url + queryStr
    return apiurl
  }
}
