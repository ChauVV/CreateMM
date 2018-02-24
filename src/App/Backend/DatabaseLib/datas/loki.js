import Loki from 'lokijs'
var db = new Loki('loki.json')
var datas = db.addCollection('datas')

export const set = (KEY, VALUE) => {
  if (datas.chain().find({key: KEY}).data()[0]) {
    console.log('update')
    datas.findAndRemove({key: KEY})
  }
  console.log('insert')
  datas.insert({key: KEY, value: VALUE})
}

export const get = (KEY) => {
  console.log('get :')
  const data = datas.chain().find({key: KEY}).data()[0]
  if (data) {
    return JSON.parse(data.value)
  }
  return ''
}
