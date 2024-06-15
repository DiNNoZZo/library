import { JSONSchemaType } from "ajv";
import ajvInsatnce from "../validations/ajv-instance";

interface IConfigSchema {
  NODE_ENV: "development" | "test" | "production";
  PORT: number;
  DB_HOST: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  SESSION_TIMEOUT: number;
  SESSION_SECRET: string;
}

const schema: JSONSchemaType<IConfigSchema> = {
  type: "object",
  additionalProperties: false,
  properties: {
    NODE_ENV: { type: "string", default: "development" },
    PORT: { type: "integer", default: 3000 },
    DB_HOST: { type: "string", default: "db" },
    DB_NAME: {
      type: "string",
      default: process.env.NODE_ENV === "test" ? "library-test" : "library",
    },
    DB_USERNAME: { type: "string", default: "root" },
    DB_PASSWORD: { type: "string", default: "root" },
    SESSION_TIMEOUT: { type: "integer", default: 8 * 60 * 60 * 1000 }, // 8 hours
    SESSION_SECRET: { type: "string", default: "session_secret" },
  },
  required: [],
};

const envVars = { ...process.env };
const valid = ajvInsatnce.validate(schema, envVars);

if (!valid)
  throw new Error(
    `Config validation errors: ${JSON.stringify(ajvInsatnce.errors)}`
  );

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db: {
    name: envVars.DB_NAME,
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    options: {
      host: envVars.DB_HOST,
      dialect: 'postgres',
    },
  },
  session: {
    timeout: envVars.SESSION_TIMEOUT,
    secret: envVars.SESSION_SECRET
  }
}
