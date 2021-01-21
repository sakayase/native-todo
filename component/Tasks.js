import React from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Task from './Task';

function Tasks(props) {

    const deleteTask = (taskId) => {
      props.deleteTask(taskId)
    }

    const checkTask = (taskId) => {
      props.checkTask(taskId)
    }


    return (
        <FlatList style={styles.main}
          data={props.taskList}
          renderItem={({ item /* a appeler item obligatoire */ }) => <Task item={item} deleteTask={deleteTask} checkTask={checkTask}/>}
          keyExtractor={item => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
      main: {
        marginTop: 20,
        width: 300,
        marginBottom: 20,
      },
    });

export default Tasks


