import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Task({deleteTask, item, checkTask}) {
    const delMsg = () => Alert.alert(
        "Suppression tâche",
        "Es-tu vraiment sûr ?",
        [
            {
                text: "OUI",
                onPress: () => deleteTask(item.id),
            },
            {
                text: "Non",
                onPress: () => console.log("Annulation de la suppression"),
                style: "cancel"
            }
        ],
        { cancelable: true }
    )
    
    const check = () => {
        checkTask(item.id);
    }

    return (
        <View style={styles.task}>
            <TouchableOpacity onPress={check}>
                {item.completed 
                ? <MaterialIcons style={styles.taskCheck} name="radio-button-checked" size={24} color="black" />
                : <MaterialIcons style={styles.taskCheck} name="radio-button-unchecked" size={24} color="black" />
                }
            </TouchableOpacity>
            <Text style={styles.taskText}>{item.title}</Text>
            <TouchableOpacity onPress={delMsg} >
                <AntDesign style={styles.taskDelete} name="closecircle" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskText: {
        paddingLeft: 10,
        alignSelf: 'center',
        flex: 1,
        flexWrap: 'wrap'
    },
    taskDelete: {
        paddingRight: 10,
    },
    task: {
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskCheck: {
        paddingLeft: 10,
    }

}
)
