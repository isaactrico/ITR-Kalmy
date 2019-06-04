
<template>
    <div id="app">

        <h4> Available Cars </h4>
        <ul>
        <li style="list-style-type:none;" v-for="car in cars">Type: {{car.type}} - Brand: {{car.brand}} - Model: {{car.model}} - CarId: {{car.carId}}</li>
        </ul>

    </div>

</template>


<script>
    import axios from "axios"
    import router from "../router"
    export default {
        name: "Login",
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
                axios.get("/api/user")
                    .then((response) => {
                        console.log(response)
                        self.$set(this, "user", response.data.user)
                    })
                    .catch((errors) => {
                        console.log('forbidden', errors)
                        alert('You must be logged in')
                        router.push("/")
                    })
            }
        },
        mounted() {
            this.getUserData()
        }
    }
</script>
