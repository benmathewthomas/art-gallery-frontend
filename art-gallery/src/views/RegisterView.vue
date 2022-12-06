<template>
    <div class="container">
        <div class="card">
            <h1>Register</h1>
            <p>Enter your details below to register an account.</p>
            <hr>
            <label for="firstName"><b>First Name:</b></label>
            <input v-model="user.firstName" ref="firstName" type="text" placeholder="Enter first name" name="firstName" />

            <label for="lastName"><b>Last Name:</b></label>
            <input v-model="user.lastName" ref="lastName" type="text" placeholder="Enter last name" name="lastName" />

            <label for="email"><b>Email</b></label>
            <input v-model="user.email" ref="email" type="email" placeholder="Enter email" name="email" />

            <label for="password"><b>Password:</b></label>
            <input v-model="user.password" ref="password" type="password" placeholder="Enter password" name="password" />

            <label for="password-repeat"><b>Repeat Password:</b></label>
            <input v-model="user.repeatPassword" ref="repeatpassword" type="password" placeholder="Repeat password" name="password-repeat" />

            <label>
                <input type="checkbox" checked="checked" name="remember" />
                Remember me
            </label>

            <div class="clearfix">
                <button type="button" class="cancel-button" v-on:click="back">Cancel</button>
                <button type="submit" class="register-submit" v-on:click="register">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'RegisterView',
    data () {
        return {
            user: {
                userID:0,
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                repeatPassword:""
            }
        }
    },
    methods: {
        back() {
            this.$router.push('/');
        },
        async register() {
            console.log('registering...')
            if (this.validation) {
                // await Register(this.user.firstName,this.user.lastName,this.user.email, this.user.password);
            }
        },
        validation() {
            if(!this.user.firstName) {
                this.$refs.firstName.focus();
                return
            }
            if(!this.user.lastName) {
                this.$refs.lastName.focus();
                return
            }
            if(!this.user.email) {
                this.$refs.email.focus();
                return
            }
            if(!this.user.password) {
                this.$refs.password.focus();
                return
            }
            if(this.user.repeatPassword != this.user.password) {
                this.$refs.repeatpassword.focus();
                // MISMATCH MESSAGE
                return
            }
        }
    }
})
</script>

<style scoped>
    .container {
        width: 40%;
        padding: 10px;
    }
    input[type=text], input[type=email], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: green;
    }
    input[type=text]:focus, input[type=email]:focus, input[type=password]:focus {
        background-color: red;
        outline: none;
    }

</style>