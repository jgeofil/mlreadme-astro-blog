import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'
import { PROJECT_NAME, REPO_URL } from 'src/consts.ts'

export default defineConfig({
 projectName: 'mlreadme-astro-blog',
 logicalId: 'mlreadme-astro-blog-1',
 repoUrl: 'https://github.com/jgeofil/mlreadme-astro-blog',
 checks: {
   activated: true,
   muted: false,
   runtimeId: '2022.10',
   frequency: Frequency.EVERY_5M,
   locations: ['us-east-1', 'eu-west-1'],
   tags: ['website'],
   checkMatch: '**/tests/**/*.check.ts',
   ignoreDirectoriesMatch: [],

   browserChecks: {
     frequency: Frequency.EVERY_10M,
     testMatch: '**/tests/**/*.spec.ts',
   },

   playwrightConfig: {
     use: {
       extraHTTPHeaders: {
         'x-vercel-set-bypass-cookie': 'true',
       },
     },
   }
 },
 cli: {
   runLocation: 'eu-west-1',
 }
})
