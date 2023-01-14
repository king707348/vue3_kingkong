import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  const num = ref(0)

  return { num }
})
