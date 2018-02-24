// import Offline from '../../../Backend/HBLibrary/Offline/offline.min.js'

export const offlineCheck = () => {
//   console.log('Check offline')
//   Offline.options = {
//     checkOnLoad: true,
//     checks: {xhr: {url: 'https://www.google.com'}}
//   }
//   // setInterval(() => {
//   //   console.log(Offline.state)
//   //   Offline.check()
//   // }, 5000)
//   console.log(Offline.state)
//   Offline.check()
//   Offline.on('up', console.log('internet on'))
//   Offline.on('down', console.log('internet off'))
  // console.log('Your browser is')
  // document.addEventListener('ononline', onFunction)
  // document.addEventListener('onoffline', offFunction)
}

export const ononline = () => {
  console.log('Your browser is working online.')
}

export const onoffline = () => {
  console.log('Your browser is working offline.')
}
