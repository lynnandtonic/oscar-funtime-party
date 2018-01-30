import { composeBundles, cachingBundle } from 'redux-bundler';
import categories from './categories';
import nominees from './nominees';
import user from './user';

export default composeBundles(
  user,
  categories,
  nominees,
  cachingBundle({version: 1})
);
