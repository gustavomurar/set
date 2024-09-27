import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Herry', price: 99.17, qty: 100},
    {id: 2, name: 'Alice', price: 34.9, qty: 50},
    {id: 3, name: 'Oz', price: 21.17, qty: 90},
    {id: 4, name: 'Terra do nunca', price: 76.9, qty: 200},
    {id: 5, name: 'Aladdin', price: 100, qty: 20},

  ])
 
  return { products }
})
