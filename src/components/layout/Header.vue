<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-">
      <div class="container">
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                Home
              </router-link>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/categories" class="nav-link">
                Categories
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/costs" class="nav-link">
                Costs
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
