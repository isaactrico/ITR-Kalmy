<template>
    <div>
        <h2>Turn In</h2>
        <form v-on:submit="turn">

            <h4>Enter the Id of the car you want to turn in</h4>
            <input type="text" name="carId"/><br>
            <input type="submit" value="turn"/>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Turn",
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
        axios.get("/api/turn")
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
    turn: (e) => {
      e.preventDefault()
      let id = Number(e.target.elements.carId.value)
      let turn = () => {
        let data = {
          carId: id
        }
        axios.post("/api/turn", data)
          .then((response) => {


            console.log(response.data.turnedCar);

          })
          .catch((errors) => {
            console.log(errors)
          })
      }
      turn()
    }
  },
  mounted() {
      this.getUserData()
  }
}
</script>
