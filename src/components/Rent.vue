<template>
    <div>
        <h2>Rent</h2>
        <form v-on:submit="rent">

            <h4>Enter the Id of the car you want to rent</h4>
            <input type="text" name="carId"/><br>
            <input type="submit" value="rent"/>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Rent",
  data() {
      return {
          user: {
              name: 'Jesse'
          }
      }
  },
  methods: {
    getUserData: function() {
        let self = this
        axios.get("/api/rent")
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
    rent: (e) => {
      e.preventDefault()
      let id = Number(e.target.elements.carId.value)
      let rent = () => {
        let data = {
          carId: id
        }
        axios.post("/api/rent", data)
          .then((response) => {


            console.log(response.data.rentedCar);

          })
          .catch((errors) => {
            console.log(errors)
          })
      }
      rent()
    }
  },
  mounted() {
      this.getUserData()
  }
}
</script>
