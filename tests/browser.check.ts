// __checks__/browser.check.ts
import fs from 'fs';
import { BrowserCheck } from 'checkly/constructs';
import { groupProd, groupPreview } from './groups.check';
​
// This reads a directory and extracts all file paths containing '.spec.ts'
const files = fs.readdirSync('tests/');
const specFiles = files.filter((filename) => {
  return filename.includes('.spec.ts');
});
​
// This is the list of environments and their matching group; it can be extended easily
const environments = [
	{ name: 'preview', group: groupPreview },
	{ name: 'production', group: groupProd },
];
​
// Here we create a new browser check for each environment x testspec combination
// Checks are added to the right groups - the group will set the right env variable for the target URL
environments.forEach((environment) => {
	for (const specFile of specFiles) {
		new BrowserCheck(`${specFile}${environment.name}`, {
			name: `${specFile} [${environment.name}]`,
			tags: [`${environment.name}`],
			group: environment.group,
			code: {
				entrypoint: specFile,
			},
		});
	}
});
