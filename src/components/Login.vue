<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit="login">
            <h5>Email</h5>
            <input type="text" name="email"/><br>
            <h5>Password</h5>
            <input type="password" name="password"/><br>
            <input type="submit" value="Login"/>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Login",
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = e.target.elements.email.value
      let password = e.target.elements.password.value
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post("/api/login", data)
          .then((response) => {
            console.log("Logged in")
            router.push("/catalog")
          })
          .catch((errors) => {
            console.log("Bad request", errors)
            alert("Bad Request")
          })
      }
      login()
    }
  }
}
</script>
