import React from 'react';

import {View, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const CHAPTERS_QUERY = gql`
  query Todos {
    todos {
      id
      task
      completed
      user_id
    }
  }
`;

const Todos = () => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  return (
    <>
      {!loading && data && (
        <View>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      )}
    </>
  );
};

export default Todos;
