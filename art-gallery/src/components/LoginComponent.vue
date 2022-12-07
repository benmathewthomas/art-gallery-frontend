<template>
    <div class="container">
        <div class="card">
            <!-- <h3>Log in</h3> -->
            <Form name="login-form" @submit="handleLogin">
                <p class="login-text">Enter your login details to sign in, or click 'Sign up' to create an account.</p>

                <label for="email">Email</label>
                <p class='error-message'><ErrorMessage name="email" /></p>
                <Field v-model="email" type="email" placeholder="Enter email" class="form-control" name="email" rules="required" />

                <label for="password">Password:</label>
                <p class='error-message'><ErrorMessage name="password" /></p>
                <Field v-model="password" type="password" placeholder="Enter password" name="password" class="form-control" rules="required"/>

                <button type="submit" class="login-submit">Log In</button>
                <button><router-link to="/signup" class="btn-link">Sign up</router-link></button>
            </Form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';

defineRule("required", (value) => {
    if (!value) {
      return "This field is required";
    }

    return true;
});

export default {
    name: 'LoginComponent',
    data() {
        return {
            submitted: false,
            email:"",
            password:""
        };
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleLogin () {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
        }
    }
};
</script>

<style scoped>
    .container {
        width: 90vw;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 15px;
    }

    .card {
        text-align: left;
        max-width: 550px;
        display: inline-block;
        background-color: #f7f7f7;
        border-radius: 8px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        padding: 10px 15px 15px;
    }

    h3 {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    input[type=text], input[type=email], input[type=password] {
        width: 80%;
        padding: 5px;
        margin: 10px;
        display: inline-block;
        border: #bac0c2 solid 1px;
        border-radius: 3px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .75em;
    }

    input[type=text]:focus, input[type=email]:focus, input[type=password]:focus {
        outline: #282a2b solid 1px;
    }

    .login-text {
        color: rgb(36, 36, 36);
        font-size: .8em;
        padding: 0;
        margin: 10px 0 0 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    label {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
        font-size: .9em;
        margin-left: 15px;
    }

    button {
        border: none;
        background-color: rgb(217, 163, 248);
        padding: 5px 15px;
        margin: 0 15px;
        font-weight: bold;
    }

    .btn-link {
        text-decoration: none;
    }

    button:hover {
        background-color: rgb(255, 206, 199);
        text-decoration: underline;
        cursor: pointer;
    }

    .password-prompt, .error-message {
        font-size: .7em;
        padding-left: 20px;
        margin: 0;
    }
    .error-message {
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(219, 26, 26);
    }

    @media only screen and (max-width: 600px) {
        .container {
            max-width: 350px;
        }
    }
</style>