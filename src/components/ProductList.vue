<template>
  <div class="container mt-5">
    <h2>Product List</h2>
    <button class="btn btn-primary mb-3" @click="fetchProducts">Load Products</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-danger">{{ error }}</div>
    <ul class="list-group">
      <li v-for="product in products" :key="product.id" class="list-group-item">
        {{ product.title }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([]);
const loading = ref(false);
const error = ref("");

async function fetchProducts() {
  loading.value = true;
  error.value = "";
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    if (!res.ok) throw new Error("Failed to load products");
    products.value = await res.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>