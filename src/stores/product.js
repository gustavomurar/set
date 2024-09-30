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
 
  function getProductById(id) {
      for (let product of products.value) {
        if (product.id == id) {
          return product
        }
      }
      return null
    //return products.value.find((product) =>  product.id == id)
  }

  function deleteProductById(id){
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  function aticionaProductById(id){
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  return { products, getProductById, deleteProductById }
})
