<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-lg p-4" style="width: 28rem;">
      <h1 class="mb-4 text-primary text-center">Product Search</h1>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <label for="productId" class="form-label">PRODUCT ID</label>
        <input
          class="form-control"
          v-model="productId"
          id="productId"
          placeholder="Enter Product ID"
          type="number"
          required
        />
        <button class="btn btn-success mt-4">Fetch Product</button>
      </form>

      <!-- Loading -->
      <div v-if="loading" class="mt-3">Loading...</div>

      <!-- Error -->
      <p v-if="error" class="text-danger mt-3">{{ error }}</p>

      <!-- Success -->
      <div v-if="product" class="alert alert-success mt-4">
        <h5>{{ product.title }}</h5>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <p><strong>Category:</strong> {{ product.category }}</p>
        <p><strong>Description:</strong> {{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const productId = ref("")
const product = ref(null)
const loading = ref(false)
const error = ref(null)

async function handleSubmit() {
  loading.value = true
  error.value = null
  product.value = null

  try {
    const result = await fetch(
      `https://fakestoreapi.com/products/${productId.value}`
    )

    if (!result.ok) {
      throw new Error("Product not found")
    }

    const data = await result.json()
    product.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>
