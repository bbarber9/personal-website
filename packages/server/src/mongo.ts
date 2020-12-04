import { MongoClient } from "mongodb";
import { WorkHistory } from "./types";

const doWithDb = async (action: (client: MongoClient) => Promise<void>) => {
  const client = await MongoClient.connect("asdf");
  try {
    await action(client);
  } catch (e) {
    console.info("Error with the database!");
  } finally {
    client.close();
  }
};

export const getWorkHistory = async (): Promise<WorkHistory> => {
  const { MONGO_USER, MONGO_PW, MONGO_HOST } = process.env;
  const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PW}@${MONGO_HOST}/personal`;

  try {
    const client = await MongoClient.connect(mongoURL);
    const personalDB = client.db("personal");
    const workHistoryColl = personalDB.collection<WorkHistory>("workHistory");
    const res = await workHistoryColl
      .find({ person: "Breyton Barber" })
      .toArray();
    client.close();
    if (!res || !res[0]) {
      throw new Error("Failed to find work history data!");
    }
    return res[0];
  } catch (e) {
    throw e;
  }
};
