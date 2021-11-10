<template>
    <div class="h-screen">
        <div class="h-full overflow-hidden flex">
            <div class="w-full max-w-xs justify-items-center ">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
                    <h1 class="text-center text-3xl font-bold">
                        GonsArcade
                    </h1>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Please write your password</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-gray-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
       try {
        let user = await this.$axios.$post(
          "api/newUser",
          this.userCreate,
          {
            headers: { "x-access-token": this.$store.state.main.token },
            progress: false
          }
        );
        this.listUsers();
        this.userCreate = {};
        this.create = false;
        } 
        catch (e) 
        {
        this.message = e.response.data.message;
        this.typeM = "danger";
        }
    }
}
</script>

<style scoped>
.login-body {
    width: 200%;
    margin-left: -50%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
}

</style>