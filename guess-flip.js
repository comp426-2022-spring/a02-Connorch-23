'use strict'

import {flipACoin} from "./modules/coin.mjs";
import { createRequire } from 'module';
import { coinFlips } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);

const args = require('yargs').argv;

const result = flipACoin(args.call);

if (result != undefined) {
    console.log(result);
}