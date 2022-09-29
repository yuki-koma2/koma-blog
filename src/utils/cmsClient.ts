// @ts-nocheck
import { createClient } from 'microcms-js-sdk';
const { API_KEY, SERVICE_ID } = process.env;

export const client = createClient({
    serviceDomain: SERVICE_ID,
    apiKey: API_KEY,
});