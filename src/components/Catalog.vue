
<template>
    <div id="app">


        <h2>Catalog</h2>
        <form v-on:submit="catalog">
            <h4>Model</h4>
            <input type="text" name="model"/><br>
            <h4>Brand</h4>
            <input type="text" name="brand"/><br>
            <h4>Type</h4>
            <input type="radio" name="type" value="1">small</input>
            <input type="radio" name="type" value="2">medium</input>
            <input type="radio" name="type" value="3">big</input><br>
            <input type="submit" value="Get Catalog"/>
        </form>
        

    </div>

</template>



<script>
import router from "../router"
import axios from "axios"

export default {
  name: "Catalog",
  data() {
      return {
          user: {
              name: 'Jesse'
          },
          cars: window.catalog
      }
  },
  methods: {
    getUserData: function() {
        let self = this
        axios.get("/api/catalog")
            .then((response) => {
                console.log(response)
                self.$set(this, "user", response.data.user)
            })
            .catch((errors) => {
                console.log('forbidden', errors)
                alert('You must be logged in')
                router.push("/")
            })
    },
    catalog: (e) => {
      e.preventDefault()
      let type = e.target.elements.type.value
      let brand = e.target.elements.brand.value
      let model = e.target.elements.model.value
      let catalog = () => {
        let data = {
          type: type,
          brand: brand,
          model: model
        }
        axios.post("/api/catalog", data)
          .then((response) => {
            console.log(response.data.catalog);
            window.catalog = response.data.catalog;
            router.push("/dashboard")
          })
          .catch((errors) => {
            console.log('forbidden', errors)
          })
      }
      catalog()
    }
  },
  mounted() {
      this.getUserData()
  }
}
</script>
