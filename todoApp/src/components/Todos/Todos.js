import React from 'react';

import {View, Text, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Task from '../Task/Task';

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

const Todos = ({navigation}) => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  return (
    <>
      {!loading && data && (
        <FlatList
          data={data.todos}
          renderItem={({item}) => (
            <Task
              task={item}
              onPress={() => navigation.navigate('Task', {chapter: item})}
            />
          )}
          keyExtractor={task => task.id.toString()}
        />
      )}
    </>
  );
};

export default Todos;
