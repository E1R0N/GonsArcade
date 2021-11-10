<template>
    <div class="h-screen">
        <div class="h-full overflow-hidden">
            <h1 class="text-center text-3xl font-bold">
                GonsArcade
            </h1>
            <div class="login-body mt-12 h-full flex justify-center items-center">
                <p>Inciar sesion con Google</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
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