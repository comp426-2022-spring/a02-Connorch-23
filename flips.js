'use strict'

import {coinFlips, countFlips} from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('yargs').argv;

const array = coinFlips(args.number);

console.log(array);

console.log(countFlips(array));


