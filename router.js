
// const device = () => import(/* webpackChunkName: "deviceManageIndex" */ './deviceManageIndex')
// const device = resolve => require(['./deviceManageIndex'], 'resolve8888', 'deviceManageIndex')
const device = resolve => require.ensure([], () => resolve(require('./deviceManageIndex')), 'deviceManageIndex')
// const encodeDevice = resolve => require(['./devices/encodeDevice/encodeDevice'], resolve, 'encodeDevice')
const encodeDevice = resolve => require.ensure([], () => resolve(require('./devices/encodeDevice/encodeDevice')), 'encodeDevice')
// const storeDevice = resolve => require(['./devices/storeDevice/storeDevice'], resolve, 'storeDevice')
const storeDevice = resolve => require.ensure([], () => resolve(require('./devices/storeDevice/storeDevice')), 'storeDevice')
// const monitorDevice = resolve => require(['./devices/monitorDevice/monitorDevice'], resolve)
const monitorDevice = resolve => require.ensure([], () => resolve(require('./devices/monitorDevice/monitorDevice')), 'monitorDevice')
// const guardDevice = resolve => require(['./devices/guardDevice/guardDevice'], resolve)
const guardDevice = resolve => require.ensure([], () => resolve(require('./devices/guardDevice/guardDevice')), 'guardDevice')
// const decoderDevice = resolve => require(['./devices/decoderDevice/decoderDevice'], resolve)
const decoderDevice = resolve => require.ensure([], () => resolve(require('./devices/decoderDevice/decoderDevice')), 'decoderDevice')
// const ezvizDevice = resolve => require(['./devices/ezvizDevice/ezvizDevice'], resolve)
const ezvizDevice = resolve => require.ensure([], () => resolve(require('./devices/ezvizDevice/ezvizDevice')), 'ezvizDevice')
// const importError = resolve => require(['./devices/encodeDevice/importError'], resolve)
const importError = resolve => require.ensure([], () => resolve(require('./devices/encodeDevice/importError')), 'importError')
// import device from './deviceManageIndex'
// import encodeDevice from './devices/encodeDevice/encodeDevice'
// import storeDevice from './devices/storeDevice/storeDevice'
// import monitorDevice from './devices/monitorDevice/monitorDevice'
// import guardDevice from './devices/guardDevice/guardDevice'
// import decoderDevice from './devices/decoderDevice/decoderDevice'
// import ezvizDevice from './devices/ezvizDevice/ezvizDevice'
// import importError from './devices/encodeDevice/importError'
const parentPath = '/baseConfig/deviceManage'
export default [{
  path: parentPath,
  name: 'device',
  component: device,
  redirect: parentPath + '/encodeDevice',
  children: [
    {
      path: parentPath + '/encodeDevice',
      name: 'encodeDevice',
      component: encodeDevice
    },
    // {
    //   path: parentPath + '/importError',
    //   name: 'importError',
    //   component: importError
    // },
    {
      path: parentPath + '/storeDevice',
      name: 'storeDevice',
      component: storeDevice
    },
    {
      path: parentPath + '/monitorDevice',
      name: 'monitorDevice',
      component: monitorDevice
    },
    {
      path: parentPath + '/guardDevice',
      name: 'guardDevice',
      component: guardDevice
    },
    {
      path: parentPath + '/decoderDevice',
      name: 'decoderDevice',
      component: decoderDevice
    },
    {
      path: parentPath + '/ezvizDevice',
      name: 'ezvizDevice',
      component: ezvizDevice
    }
  ]
}, {
  path: '/importError',
  component: importError
}]
