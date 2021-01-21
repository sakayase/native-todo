import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
// expo install expo-app-loading
import AppLoading from 'expo-app-loading';

// Police d'ecriture perso
import { useFonts } from 'expo-font';

// Police google font
// expo install expo-font @expo-google-fonts/[font]
// https://github.com/expo/google-fonts/blob/master/GALLERY.md#readme
//import { useFonts, ArbutusSlab_400Regular } from '@expo-google-fonts/arbutus-slab';

import Tasks from './component/Tasks';
import Task from './component/Task';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   ArbutusSlab_400Regular,
  // })

  let [fontsLoaded] = useFonts({
    'Hachi-Maru': require('./assets/fonts/HachiMaruPop-Regular.ttf'),
  });



  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => { // se lance a la fin de chaque chargement
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res =>{
      setTaskList(res.data);
    })
}, [/* Tableau de dépendance, tout ce qui est dans ce tableau lance ce les instructions du useEffect */]) 

  const handleSubmit = () => {
    if (newTask !== '') {
      const taskObject = {
        id: uuidv4(),
        title: newTask,
        completed: false
      }
      setTaskList([...taskList, taskObject]);
    }
    setNewTask('');
  }

  const deleteTask = (taskId) => {
    const newList = taskList.filter(task => task.id !== taskId);
    setTaskList(newList);
  }

  const deleteAll= () => {
    setTaskList([]);
  }

  const checkTask = (taskId) => {
    const newList = taskList;
    const taskIndex = newList.findIndex(task => task.id === taskId);
    newList[taskIndex].completed = !newList[taskIndex].completed;
    setTaskList([...newList]);
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Ma Todo List:</Text>
        <TextInput value={newTask}
          onChangeText={txt => setNewTask(txt)} style={styles.input} />
        <Button onPress={() => handleSubmit()}
          title="Nouvelle tache"
          color="gray"
        />
        <Tasks taskList={taskList} deleteTask={deleteTask} checkTask={checkTask}/>
        <Button onPress={() => deleteAll()}
          title="Tout supprimer"
          color="red"
          style={styles.deleteButton}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbcbc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Hachi-Maru',
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  main: {
    marginTop: 20,
    width: 300,
    marginBottom: 20,
  },
  deleteButton: {
    
  }
});
