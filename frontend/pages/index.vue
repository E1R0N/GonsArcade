<template>
  <v-card class="elevation-12 mx-auto">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Sign up</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="save">
        <v-card-title> Formulario de Registro de informacion </v-card-title>
        <v-divider class="mx-3"></v-divider>
        <v-text-field
          label="Firstname"
          v-model="user.userFirstName"
        ></v-text-field>
        <v-text-field
          label="Lastname"
          type="text"
          v-model="user.userLastName"
        ></v-text-field>
        <v-text-field
          label="Gender"
          type="text"
          v-model="user.userGenre"
        ></v-text-field>
        <v-text-field
          label="Email"
          type="text"
          v-model="user.userMail"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="user.userPassword"
        ></v-text-field>

        <v-divider class="mx-3"></v-divider>
        <v-card-subtitle> Preferencias de Videojuegos </v-card-subtitle>

        <v-select
          v-model="user.userCategory"
          :items="categories"
          label="Categoria"
        >
        </v-select>
        <v-select v-model="user.userConsole" :items="consoles" label="Consola">
        </v-select>
        <v-select
          v-model="user.userClassification"
          :items="clasifications"
          label="Clasificacion"
        >
        </v-select>
        <v-divider class="my-3 mx-4"></v-divider>
        <v-btn color="primary" type="submit">Create Profile</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: "login",
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      user: {
        userGenre: "",
        userFirstName: "",
        userLastName: "",
        userMail: "",
        userPassword: "",
        userCategory: "",
        userConsole: "",
        userClassification: "",
      },
      consoles: [],
      clasifications: [],
      categories: [],
    };
  },
  created() {
    this.listConsole();
    this.listClasifications();
    this.listCategories();
  },
  methods: {
    async listConsole() {
      try {
        let consoles = await this.$axios.$get("api/console", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
          },
          progress: false,
        });
        consoles.forEach((c) => {
          this.consoles.push({ text: c.consoleName, value: c._id });
        });
      } catch (e) {
        this.message = e.response.data.message;
        this.type = "error";
      }
    },
    async listClasifications() {
      try {
        let clasifications = await this.$axios.$get("api/classification", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
          },
          progress: false,
        });
        clasifications.forEach((c) => {
          this.clasifications.push({ text: c.esrbCode, value: c._id });
        });
      } catch (e) {
        this.message = e.response.data.message;
        this.type = "error";
      }
    },
    async listCategories() {
      try {
        let categories = await this.$axios.$get("api/category", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
          },
          progress: false,
        });
        categories.forEach((c) => {
          this.categories.push({ text: c.categoryName, value: c._id });
        });
      } catch (e) {
        this.message = e.response.data.message;
        this.type = "error";
      }
    },

    async save() {
      try {
        let user = await this.$axios.$post(
          "http://localhost:5000/api/newUser",
          this.user,
          {
            progress: false,
          }
        );
        console.log(user)
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>