import { composeBundles, createCacheBundle } from 'redux-bundler';
import categories from './categories';
import nominees from './nominees';
import selections from './selections';
import user from './user';

export default composeBundles(
  user,
  categories,
  nominees,
  selections,
  createCacheBundle({version: 1})
);
