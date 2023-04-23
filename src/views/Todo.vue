<template>
  <div class="home">
    <v-list 
    class="pt-0" flat >
  
<div v-for="task in tasks" :key="task.id">
      <v-list-item value="notifications"
      @click="doneTask(task.id)"
      :style="task.done?'background-color:blue' : ''"
      >
        <template v-slot:prepend="{ isActive }">

          <v-list-item-action start>
        
            <v-checkbox-btn :model-value="task.done" color="primary"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title 
        :class="{'text-decoration-line-through' : task.done}"
        >
        {{ task.title }}
      </v-list-item-title>

      </v-list-item>
      <v-divider></v-divider>

    </div>
    </v-list>
</div>


</template>

<script setup>
//task = localStorage.getItem(task)
</script>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tasks: [
        {
          id:1,
          title: 'Wake up',
          done: false
        },
        {
          id:2,
          title: 'Eat',
          done: false

        },
        {
          id:3,
          title: 'Brush',
          done: false

        }
      ]
    }
  },
  methods: {
    doneTask(id) {
      //localStorage.setItem (task)
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done=!task.done
    }
  }
}
</script>
