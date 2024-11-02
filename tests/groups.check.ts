// __checks__/groups.check.ts
import { CheckGroup } from 'checkly/constructs'
import { ApiCheck, AssertionBuilder } from 'checkly/constructs'
//import { smsChannel, emailChannel } from '../alert-channels'
//const alertChannels = [smsChannel, emailChannel]

const BASE_URL = 'mlread.me'
​
export const groupPreview = new CheckGroup('group-browser-dev', {
  name: 'preview-group',
  tags: ['preview', 'website'],
  // You can use group-level environment vars to point each group's checks to the right target URL
  environmentVariables: [{ key: 'TARGET_URL', value: 'https://development-mlreadme.vercel.app' }],
  concurrency: 100,
  //alertChannels
})

export const groupProd = new CheckGroup('group-browser-prod', {
  name: 'production-group',
  tags: ['production', 'website'],
  // You can use group-level environment vars to point each group's checks to the right target URL
  environmentVariables: [ { key: 'TARGET_URL', value: `https://${BASE_URL}` }],
  concurrency: 100,
  //alertChannels
})


new ApiCheck('base-api-check', {
  name: 'base',
  group:groupProd,
  tags: ['production'],
  maxResponseTime: 5000,
  degradedResponseTime: 2000,
  request: {
    method: 'GET',
    url: `https://${BASE_URL}`,
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})

new ApiCheck('base-www-api-check', {
  name: 'base-www',
  group: groupProd,
  tags: ['www', 'production'],
  maxResponseTime: 5000,
  degradedResponseTime: 2000,
  request: {
    method: 'GET',
    url: `https://www.${BASE_URL}`,
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})