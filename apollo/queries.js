import gql from "graphql-tag";

export const GET_UNIS_QUERY = gql`
  query {
    filterUnis(name: String) {
        id
        name
    }
  }
`;