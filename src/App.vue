<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
 <v-list-item
          prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycBNsgGzrB-55SP7axndzlj4ZkhkDTe2OMA&usqp=CAU"
          title="To Do List"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
<!--<v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          -->
          <v-list-item v-for="item in items"
          :key="item.title"
          :to="item.to"
          link>
          <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>{{item.title}}</v-list-item-title></v-list-item-content>
         
        </v-list-item>

     
        </v-list>



    </v-navigation-drawer>

  <!--  <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
-->
    <v-app-bar
        app
        color="primary"
 
        image="../public/mountains.jpg"
        prominent
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>To do list (우선순위 목록)</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>



    <v-main>
      <router-view></router-view>>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Todo', icon: 'mdi-format-list-checks',to: '/' },
          { title: 'About', icon: 'mdi-help-box',to: '/about'}
        ],
        rail: true,
      }
    },
  }
</script>