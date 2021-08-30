<template>
  <div id="app">
    <div id="nav">
      <div class="nav_elem">
        <div class="nav_elem_logo"></div>
      </div>
      <div class="nav_links">
        <router-link to="/">New message</router-link>
        <router-link to="/about">History</router-link>
      </div>
    </div>
    <div class="app_line"></div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Source Sans Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 16px;
  color: #2c3e50;
  min-width: 100vw;
  position: fixed;
  top: 0;
  background-color: #ffffff;

  .app_line {
    border-bottom: solid 24px #4eadc5;
    margin-top: -16px;
    min-width: 100vw;
  }
  #nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-areas: "elem links";
    max-width: 1000px;
    margin: auto;
    padding: 15px;
    .nav_elem {
      grid-area: elem;
      margin-top: 16px;
      .nav_elem_logo {
        content: url("../assets/rick_morty.png");
        margin-top: -16px;
        padding: 1px;
      }
    }
    .nav_links {
      grid-area: links;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;

      a {
        font-size: 16px;
        color: #324b72;
        text-decoration: none;
        padding: 5px;
        &.router-link-exact-active {
          color: #fafffd;
          background-color: #4eadc5;
        }
      }
    }
  }
}
</style>
