import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import dbConnect from "../../utils/dbConnect";
import mongoose from 'mongoose'
import Uni from "../../data/models/Uni";

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        await mongoose.connect(
          process.env.MONGODB_URI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          }
        );
      } catch (e) {
        console.log("--->error while connecting with graphql context (db)", e);
      }
    }
    return { db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
