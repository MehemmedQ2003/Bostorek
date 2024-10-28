<template>
    <section class="full-section-height d-flex align-items-center justify-content-center bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10 col-sm-12 mx-auto">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h2 class="text-center mb-5 fw-bold text-primary">Login</h2>
                            <form @submit.prevent="submitForm">
                                <!-- Email -->
                                <div class="mb-4">
                                    <label for="email" class="form-label">Email address</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="envelope" />
                                        </span>
                                        <input type="email" class="form-control" id="email" v-model.trim="formData.email" required placeholder="Email" >
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="mb-4">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="lock" />
                                        </span>
                                        <input type="password" class="form-control" id="password" placeholder="Password" v-model.trim="formData.password" required>
                                    </div>
                                </div>

                                <!-- Login Button -->
                                <div class="d-grid">
                                    <button type="submit" class="btn text-white" style="background-color: var(--primary-color); height: 50px;">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LoginView',
        data(){
            return {
                formData: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            submitForm(){
                console.log("Login Form Data: ", this.formData)
            }
        }
    }
</script>

<style scoped>
</style>