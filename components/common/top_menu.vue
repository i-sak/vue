<template>
<nav class="navbar">
    <!-- a tag 대신에 router-link 태그를 사용한다. -->
    <router-link to="/">
        <h1>TOP MENU</h1>
    </router-link>
    <router-link to="/board_main">board_main</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/join">join</router-link>
    <router-link to="/modify_user">modify_user</router-link>
    <router-link to="/logout">logout</router-link>
</nav>
</template>