// hello-api.check.ts

import { ApiCheck, AssertionBuilder } from 'checkly/constructs'
import path from 'path'
import { readFileSync } from 'fs'

new ApiCheck('base-api-check', {
  name: 'base',
  activated: true,
  request: {
    method: 'GET',
    url: 'https://mlread.me',
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})

new ApiCheck('base-www-api-check', {
  name: 'base-www',
  activated: true,
  request: {
    method: 'GET',
    url: 'https://www.mlread.me',
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})