const client = require('@harnessio/ff-nodejs-server-sdk').default;
const dotenv = require('dotenv');

dotenv.config()

console.log('Starting application');
client.init(process.env.SDK_KEY);

setInterval(async () => {
  const target = {
    identifier: 'harness',
  };
  const value = await client.boolVariation('test', target, false);
  console.log('Evaluation for flag test and target: ', value, target);
}, 10000);

console.log('Application started');
