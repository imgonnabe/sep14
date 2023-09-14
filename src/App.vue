<template>
 <menuPage/> <!-- 메뉴 컴포넌트 보이기 -->
 <router-view/> <!-- 라우트된 페이지가 보일 곳 -->
</template>
<script>
import menuPage from './components/MenuPage.vue'
export default {
 name: 'App',
 components: {
 menuPage
 }
}
</script>
<style>
body{
 margin: 0;
 padding: 0;
}
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}
</style>
