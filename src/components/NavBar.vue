<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">Etec Blog</a>
    </div>
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/etec.png" width="120" />
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/post">Início</router-link>
        <a class="navbar-item" href="#">Sua conta</a>
        <template v-if="isLoggedIn">
          <button class="navbar-item" @click="logout">Logout</button>
        </template>
        <template v-else>
          <router-link class="navbar-item" to="/">Login</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      this.isLoggedIn = false;
    },
    checkLoggedIn() {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (storedUsername && storedPassword) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
  },
  mounted() {
    this.checkLoggedIn();
  }
};
</script>

<style scoped>
.navbar {
  padding: 1em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
  color: black;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-end {
  margin-left: auto;
}

.navbar-item {
  color: black;
  text-decoration: none;
  margin-right: 20px;
}

.navbar-item:hover {
  color: #ccc;
}

.logo {
  margin-left: 20px; 
}
</style>
