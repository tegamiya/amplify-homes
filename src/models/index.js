// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Drink, Home } = initSchema(schema);

export {
  Drink,
  Home
};