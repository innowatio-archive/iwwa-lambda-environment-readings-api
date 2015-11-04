import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

const EnvironmentReadings = new Collection({
    name: "environment-readings",
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export const handler = EnvironmentReadings.jsonRpcToKinesis;
