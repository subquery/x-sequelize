'use strict';

const STORE_COLUMN_REGEX = /STORING\s*\(([^)]+)\)/;

export const isStoreIndex = inputString=> Boolean(inputString.match(STORE_COLUMN_REGEX));
