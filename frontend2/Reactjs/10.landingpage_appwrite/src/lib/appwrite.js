import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("670dfe58002d2a356bee"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
