import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Uni {
    id: ID!
    name: String!
    roomCharge: Int
    boardCharge: Int
    tuition: Int
    fees: Int
    bookSupplies: Int
    onCampusCost: Int
    offCampusCost: Int
    acceptRate: Int
    totalStudents: Int
    website: String
    slug: String
  }
  type Query {
    filterUnis(name: String!): [Uni]
    findUni(name: String!): Uni
  }
`;
