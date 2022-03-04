import { Client } from '@harnessio/ff-nodejs-server-sdk';
import dotenv from 'dotenv'

dotenv.config()

const client = new Client(process.env.SDK_KEY as string);

console.log('Starting application');
client.waitForInitialization();

setInterval(async () => {
  const target = {
    identifier: 'harness',
    name: "Harness"
  };
  const value = await client.boolVariation('test', target, false);
  console.log('Evaluation for flag test and target: ', value, target);
}, 10000);

console.log('Application started');
