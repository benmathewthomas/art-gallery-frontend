<template>
    <div class="container">
        <HeadingComponent title="Register" />
        <div class="card">

            <Form name="register-form" @submit="handleRegister">
                <p>Enter your details below to register an account.</p>
                <hr>
                <label for="firstName"><b>First Name:</b></label>
                <p class='error-message'><ErrorMessage name="firstName" /></p>
                <Field ref="firstName" type="text" placeholder="Enter first name" name="firstName" :rules="validateName" />

                <label for="lastName"><b>Last Name:</b></label>
                <p class='error-message'><ErrorMessage name="lastName" /></p>
                <Field ref="lastName" type="text" placeholder="Enter last name" name="lastName" :rules="validateName" />

                <label for="email"><b>Email</b></label>
                <p class='error-message'><ErrorMessage name="email" /></p>
                <Field ref="email" type="email" placeholder="Enter email" name="email" :rules="validateEmail" />

                <label for="password"><b>Password:</b></label>
                <p class="password-prompt">Password must be at least 8 characters and requires 1 of each of the following: uppercase letter, lowercase letter, number.</p>
                <p class='error-message'><ErrorMessage name="password" /></p>
                <Field id="password" type="password" placeholder="Enter password" name="password" :rules="validatePwd" />

                <label for="passwordConfirmation"><b>Confirm Password:</b></label>
                <p class='error-message'><ErrorMessage name="passwordConfirmation" /></p>
                <Field id="passwordConfirmation" type="password" placeholder="Repeat password" name="passwordConfirmation" :rules="confirmPwd" />

                <button type="button" class="cancel-button" v-on:click="back">Cancel</button>
                <button type="submit" class="register-submit" v-on:click="register">Register</button>
            </Form>

        </div>
    </div>
</template>

<script>
// import {Register} from '@/services/RegisterService'
import HeadingComponent from '@/components/HeadingComponent.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default ({
    name: 'RegisterView',
    components: {
        HeadingComponent,
        Form,
        Field,
        ErrorMessage
    },
    methods: {
        back() {
            this.$router.push('/');
        },
        async handleRegister(values) {
            console.log(JSON.stringify(values, null, 2));
            if (this.validation() === true) {
                console.log('registering...')
            //     await Register(values.firstName,values.lastName,values.email, values.password);
            }
        },
        validateName(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            // All is good
            return true;
        },
        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }

            // All is good
            return true;
        },
        validatePwd(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            // if the field is not a valid email
            const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.).*$/;
            if (!regex.test(value) || value.length < 8) {
                return 'Input a password following the above rules';
            }

            // All is good
            return true;
        },
        confirmPwd(value, target) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            if (value !== { target} ) {
                return 'Passwords must match';
            }

            return true;
        }
    }
})
</script>

<style scoped>
    .container {
        width: 90vw;
        margin: 5%;
        text-align: center;
    }

    .card {
        text-align: left;
        max-width: 600px;
        display: inline-block;
    }

    input[type=text], input[type=email], input[type=password] {
        width: 80%;
        padding: 10px;
        margin: 2% 5%;
        display: inline-block;
        border: #565b5c solid 1px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .8em;
    }

    input[type=text]:focus, input[type=email]:focus, input[type=password]:focus {
        outline: #282a2b solid 2px;
    }

    label {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 1em;
        margin-left: 15px;
    }

    button {
        border: none;
        background-color: rgb(247, 53, 27);
        padding: 10px 25px;
        margin: 0 15px;
        font-weight: bold;
    }

    button:hover {
        background-color: rgb(255, 206, 199);
        text-decoration: underline;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: .9em;
        margin: 5px 5px 15px 5px;
    }

    .password-prompt, .error-message {
        font-size: .7em;
        padding-left: 20px;
        margin: 0;
    }
    .error-message {
        color: rgb(219, 26, 26);
    }
    @media only screen and (max-width: 600px) {
        .container {
        width: 90%;
        margin: 5%;
    }
}
</style>