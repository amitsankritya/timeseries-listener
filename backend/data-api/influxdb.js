import { influxDB, influxDBApi } from "../config/influxdb";

const writeApi = influxDB.getWriteApi(influxDBApi.org, influxDBApi.bucket);

const queryApi = influxDB.getQueryApi(influxDBApi.bucket);

export { writeApi, queryApi };

export const queryData = async (query) => {
    try {
        const data = await queryApi.queryRows(query);
        return data;
    } catch (err) {
        console.error('Error querying InfluxDB:', err);
    }
};