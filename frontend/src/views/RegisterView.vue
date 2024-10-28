<template>    
    <div class="full-section-height container-fluid bg-light d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10 col-sm-12 ">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h2 class="card-title text-center mb-5 fw-bold text-primary">Register</h2>
                            <form @submit.prevent="submitForm">
                                <!-- Username -->
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>   
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="user" />
                                        </span>
                                        <input type="text" class="form-control" id="username" placeholder="Username" v-model.trim="formData.username" required>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="envelope" />
                                        </span>
                                        <input type="email" class="form-control" id="email" placeholder="Email" v-model.trim="formData.email" required>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="lock" />
                                        </span>
                                        <input type="password" class="form-control" id="password" placeholder="Password" v-model.trim="formData.password" required>
                                    </div>
                                </div>

                                <!-- Register Button -->
                                <div class="d-grid">
                                    <button type="submit" class="btn text-white" style="background-color: var(--primary-color); height: 50px;">Register</button>
                                </div>

                                

                                <!-- Gender 
                                    <div class="row justify-content-center">
                                      <div class="col-md-8 col-8 mb-3">
                                        <h5>Gender</h5>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gender" value="male" id="male" v-model="formData.gender"/>
                                                <label class="form-check-label" for="male"> Male </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gender" value="female" id="female" v-model="formData.gender"/>
                                                <label class="form-check-label" for="female"> Female </label>
                                            </div>
                                      </div>
                                    </div>

                                    Age 
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 col-8 mb-3">
                                            <label for="age" class="form-label">Age:</label>
                                            <input min="0" class="form-control" id="age" v-model.number="formData.age" required />
                                        </div>
                                    </div>

                                    Programming Language 
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 col-8 mb-3">
                                            <h5>Which Programming Language(s) you know?</h5>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="java" id="java" v-model="formData.languages" />
                                                <label class="form-check-label" for="java"> Java </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="c++" id="c++" v-model="formData.languages" />
                                                <label class="form-check-label" for="c++"> C++ </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="python" id="python" v-model="formData.languages" />
                                                <label class="form-check-label" for="python"> Python </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="rust" id="rust" v-model="formData.languages" />
                                                <label class="form-check-label" for="rust"> Rust </label>
                                            </div>
                                        </div>
                                    </div>
                                -->

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterView",
        data(){
            return {
                formData: {
                    username: "",
                    email: "",
                    password: "",
                    // gender: "",
                    // age: null,
                    // languages: []
                }
            }
        },
        methods: {
            submitForm(){
                console.log("Register Form Data: ", this.formData)
            }
        }
    };
</script>

<style scoped>
</style>