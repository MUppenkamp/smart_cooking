import {IS_DEVELOPMENT, IS_PRODUCTION} from './environments';

export const SMART_COOKING_URL = IS_PRODUCTION
    ? ''
    : 'http://localhost:3001';
