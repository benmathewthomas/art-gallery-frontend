<template>
    <div class="col-md-12">
        <div class="container">
            <h3>Login</h3>
            <form name="login-form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                    v-model="login.email"
                    ref="email"
                    placeholder="Enter email"
                    v-validate="'required'"
                    type="email"
                    class="form-control"
                    name="email"
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                    v-model="login.password"
                    ref="password"
                    placeholder="Enter password"
                    type="password"
                    class="form-control"
                    name="password"
                    />
                </div>
                <div class="form-group form-check">
                    <label for="form-check-label">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        name="remember"
                        />
                    Remember me
                    </label>
                </div>
                <div class="clearfix">
                    <button type="button" class="sign-in" v-on:click="handleLogin">
                        <span>Login</span>
                    </button>
                    <button type="button" class="sign-up" v-on:click="register">
                        <span>Register</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { Login } from '@/services/LoginService'

export default {
  name: 'LoginComponent',
  data() {
    return {
        login: {
            email:"",
            password:""
        }
    };
  },
  methods: {
    register() {
        this.$emit('hide-component')
        this.$router.push('/register');
    },
    async handleLogin() {
        if (this.validateLogin() === true) {
            console.log("Logging in...")
            await Login(this.login.email, this.login.password);
            console.log(localStorage.getItem('user'))
        }
    },
    validateLogin() {
        if(!this.login.email) {
            this.$refs.email.focus();
            return;
        }
        if(!this.login.password) {
            this.$refs.password.focus();
            return;
        }
        return true;
    }
    }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.container {
    max-width: 350px !important;
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>