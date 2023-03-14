import { gql } from "@apollo/client";

export const INFO_PERSON = gql`
  query {
    characters {
    results {
      _id
      name
      age
      avatarSrc
      description
      rank
      village
    }
    }
  }
`;
