<template>
  <div class="container mt-5">
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct" class="w-50">
      <div class="mb-3">
        <label>Product Name</label>
        <input v-model="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Price</label>
        <input v-model.number="price" type="number" class="form-control" min="1" required />
      </div>
      <button class="btn btn-success">Add</button>
    </form>

    <p v-if="error" class="text-danger mt-3">{{ error }}</p>

    <h4 class="mt-4">Local Inventory</h4>
    <ul class="list-group mt-2">
      <li v-for="(p, i) in localProducts" :key="i" class="list-group-item">
        {{ p.name }} - ${{ p.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const price = ref(null);
const localProducts = ref([]);
const error = ref("");

function addProduct() {
  if (!name.value || price.value <= 0) {
    error.value = "Invalid input!";
    return;
  }
  localProducts.value.push({ name: name.value, price: price.value });
  name.value = "";
  price.value = null;
  error.value = "";
}
</script>