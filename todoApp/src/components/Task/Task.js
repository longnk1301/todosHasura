import React from 'react';

import {View, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';

// const CHAPTERS_QUERY = gql`
//   query Todos {
//     todos {
//       id
//       task
//       completed
//       user_id
//     }
//   }
// `;

const Task = ({route}) => {
  console.log('route', route);
  // const {data, loading} = useQuery(CHAPTERS_QUERY);
  // console.log(loading, 'loading');
  // console.log(data, 'data');
  return (
    <View>
      <Text>task</Text>
    </View>
  );
};

export default Task;
