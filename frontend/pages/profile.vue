<template>
  <v-container>
  <v-card>
    <v-card-title>
    Formulario de Registro de informacion
    </v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-subtitle>
        Informacion de Perfil
    </v-card-subtitle>

    <v-divider class="mx-3"></v-divider>
    <v-card-subtitle>
        Preferencias de Videojuegos
    </v-card-subtitle>
    <v-container>
            <v-form @submit.prevent="saveCustomer">
            <v-select v-model="costumer.costumerCategory" :items="categories" label="Categoria">
            </v-select>
            <v-select v-model="costumer.costumerConsole" :items="consoles" label="Consola">
            </v-select>
            <v-select v-model="costumer.costumerClasification" :items="clasifications" label="Clasificacion">
            </v-select>
            </v-form>
    </v-container>
  </v-card>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      consoles: [],
      clasifications: [],
      categories:[],
      costumer: {
        costumerCategory: "",
        costumerConsole: "",
        costumerClasification: "",
      },
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
        let consoles = await this.$axios.$get(
          "http://localhost:5000/api/console",
          {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
            },
            progress: false,
          }
        );
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
        let clasifications = await this.$axios.$get(
          "http://localhost:5000/api/classification",
          {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
            },
            progress: false,
          }
        );
        clasifications.forEach((c) => {
            this.clasifications.push({text: c.esrbCode, value: c._id})
        })
      } catch (e) {
        this.message = e.response.data.message;
        this.type = "error";
      }
    },
    async listCategories() {
    try {
      let categories = await this.$axios.$get("http://localhost:5000/api/category", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
        },
        progress: false,
      });
      categories.forEach((c) => {
            this.categories.push({text: c.categoryName, value: c._id})
        })
    } catch (e) {
      this.message = e.response.data.message;
      this.type = "error";
    }
  },
  },
  
};
</script>