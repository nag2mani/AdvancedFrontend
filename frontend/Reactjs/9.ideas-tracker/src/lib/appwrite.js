import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fccd86000741a1f4a2");

export const account = new Account(client);
export const databases = new Databases(client);
