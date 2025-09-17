<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Inventory Manager</router-link>
      <div>
        <router-link to="/" class="btn btn-outline-light me-2">Home</router-link>
        <router-link to="/products" class="btn btn-outline-light me-2">Products</router-link>
        <router-link to="/add" class="btn btn-outline-light">Add Product</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>