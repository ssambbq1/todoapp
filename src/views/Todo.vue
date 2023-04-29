<template>
  <div class="home">
    <v-text-field
    v-model="newTaskTitle"
    @click:append-inner="addTask"
    @keyup.enter="addTask"
    class="pa-3"
            variant="underlined"
            label="Add Task"
            append-inner-icon="mdi-plus"
            hide-details
            clearable
          ></v-text-field>
    <v-list 
    class="pt-0" flat >
  
<div v-for="todo in todos" :key="todo.id">
      <v-list-item
      @click="doneTask(todo.id)"
      :style="todo.done ? 'background-color: blue' : ''"
      >
        <template v-slot:prepend="{ isActive }">

          <v-list-item-action start>
        
            <v-checkbox-btn :model-value="todo.done" color=""></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title 
        :class="{'text-decoration-line-through' : todo.done }"
        >
        {{ todo.title }}
        <v-btn
            @click.stop="deleteTask(todo.id)"
            color="primary lighten-3"
            icon="mdi-delete"
            variant="text"
          ></v-btn>
      </v-list-item-title>

      
      </v-list-item>
      <v-divider></v-divider>

    </div>
    </v-list>
</div>


</template>




<script setup>

import {ref, onMounted} from 'vue'
import {db} from '@/firebase'
import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc ,updateDoc,
   query, orderBy, limit 
  } from 'firebase/firestore'

/*
  firebase refs 
 */
  const todosCollectionRef = collection(db, 'todos')
  const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'))




const todos= ref([])

onMounted(() => {
onSnapshot(todosCollectionQuery , (querySnapshot) => {
  const fbTodos = [];
  querySnapshot.forEach((doc) => {
    const todo = {
    id: doc.id,
    title: doc.data().title,
    done: doc.data().done
  }
  fbTodos.push(todo)
  })
  todos.value = fbTodos
})
})




const newTaskTitle = ref('')

      function addTask() {

       addDoc(todosCollectionRef, {
          title: newTaskTitle.value,
          done: false,
          date: Date.now()
});

 // const newTask = { 
 //   id: Date.now(),
 //   title: newTaskTitle.value,
 //   done: false
 // }
 // todos.value.push(newTask)
  newTaskTitle.value = ''
}

function doneTask(id) {
  const todo = todos.value.find(todo => todo.id === id)

 updateDoc(doc(todosCollectionRef, id), {
  done: !todo.done
})
}

//function doneTask(id) {
//  const todo = todos.value.find(todo => todo.id === id)
//  todo.done = !todo.done
//}



function deleteTask(id) {
  deleteDoc(doc(todosCollectionRef, id))
}


//function deleteTask(id) {
//  todos.value = todos.value.filter(todo => todo.id !== id)
//}

</script>