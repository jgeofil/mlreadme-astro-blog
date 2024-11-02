// __checks__/groups.check.ts
import { CheckGroup } from 'checkly/constructs'
//import { smsChannel, emailChannel } from '../alert-channels'
//const alertChannels = [smsChannel, emailChannel]
​
export const groupPreview = new CheckGroup('group-browser-dev', {
  name: 'preview',
  activated: true,
  muted: false,
  runtimeId: '2023.09',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['preview'],
  // You can use group-level environment vars to point each group's checks to the right target URL
  environmentVariables: [{ key: 'TARGET_URL', value: 'https://mlreadme.vercel.app' }],
  apiCheckDefaults: {},
  concurrency: 100,
  //alertChannels
})

export const groupProd = new CheckGroup('group-browser-prod', {
  name: 'production',
  activated: true,
  muted: false,
  runtimeId: '2023.09',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['production'],
  // You can use group-level environment vars to point each group's checks to the right target URL
  environmentVariables: [ { key: 'TARGET_URL', value: 'https://mlread.me' }],
  apiCheckDefaults: {},
  concurrency: 100,
  //alertChannels
})
