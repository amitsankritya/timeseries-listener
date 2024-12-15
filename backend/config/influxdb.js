import { InfluxDB } from '@influxdata/influxdb-client';
import dotenv from 'dotenv';

dotenv.config();

export const influxDB = new InfluxDB({
    url: process.env.INFLUXDB_URL,
    token: process.env.INFLUXDB_TOKEN,
});

export const influxDBApi = {
    org: process.env.INFLUXDB_ORG,
    bucket: process.env.INFLUXDB_BUCKET,
}