<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { columns } from '../columns'

const data = ref<unknown[]>([])

async function getData(): Promise<unknown[]> {
  return [
    {
      "id": "3f9a2b7e",
      "amount": 287,
      "status": "pending",
      "email": "user1@example.com"
    },
    {
      "id": "5c1d8f4a",
      "amount": 632,
      "status": "success",
      "email": "user2@example.com"
    },
    {
      "id": "2e7b6d9c",
      "amount": 145,
      "status": "failed",
      "email": "user3@example.com"
    },
    {
      "id": "8a4f3e2d",
      "amount": 901,
      "status": "processing",
      "email": "user4@example.com"
    },
    {
      "id": "1h5g9i7k",
      "amount": 78,
      "status": "pending",
      "email": "user5@example.com"
    },
    {
      "id": "6m2n4p8q",
      "amount": 543,
      "status": "success",
      "email": "user6@example.com"
    },
    {
      "id": "9r7s5t3u",
      "amount": 321,
      "status": "processing",
      "email": "user7@example.com"
    },
    {
      "id": "4v8w2x6y",
      "amount": 789,
      "status": "failed",
      "email": "user8@example.com"
    },
    {
      "id": "7z1a3b5c",
      "amount": 456,
      "status": "pending",
      "email": "user9@example.com"
    },
    {
      "id": "2d4e6f8g",
      "amount": 234,
      "status": "success",
      "email": "user10@example.com"
    },
    {
      "id": "5h7i9j1k",
      "amount": 678,
      "status": "processing",
      "email": "user11@example.com"
    },
    {
      "id": "8l0m2n4p",
      "amount": 123,
      "status": "failed",
      "email": "user12@example.com"
    },
    {
      "id": "3q5r7s9t",
      "amount": 890,
      "status": "pending",
      "email": "user13@example.com"
    },
    {
      "id": "6u8v0w2x",
      "amount": 432,
      "status": "success",
      "email": "user14@example.com"
    },
    {
      "id": "9y1z3a5b",
      "amount": 765,
      "status": "processing",
      "email": "user15@example.com"
    },
    {
      "id": "4c6d8e0f",
      "amount": 210,
      "status": "failed",
      "email": "user16@example.com"
    },
    {
      "id": "7g9h1i3j",
      "amount": 543,
      "status": "pending",
      "email": "user17@example.com"
    },
    {
      "id": "2k4l6m8n",
      "amount": 876,
      "status": "success",
      "email": "user18@example.com"
    },
    {
      "id": "5p7q9r1s",
      "amount": 321,
      "status": "processing",
      "email": "user19@example.com"
    },
    {
      "id": "8t0u2v4w",
      "amount": 654,
      "status": "failed",
      "email": "user20@example.com"
    }
  ]
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <UContainer class="my-4">
    <DataTable :columns="columns" :data="data" />
  </UContainer>
</template>