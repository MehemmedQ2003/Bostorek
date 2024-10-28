<template>
    <nav class="navbar navbar-expand-lg navbar-dark custom-nav sticky-top">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">
                {{ brandName }}
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'books' }">Books</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'contact' }">Contact</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'login' }">Login</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'register' }">Register</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { onMounted } from 'vue'
    import { Collapse } from 'bootstrap'

    export default {
        name: 'NavBar',
        data(){
            return {
                brandName: 'Bostorek',
            }
        },
        setup() {
            onMounted(() => {
                document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((collapseElement) => {
                    new Collapse(collapseElement, {
                        toggle: false
                    })
                })
            })
        }
    }
</script>

<style scoped>
    .custom-nav{
        background-color: var(--primary-color);
        padding: 15px 0;
    }

    .navbar-brand{
        padding: 0;
        margin: 0;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
    }

    .nav-link{
        padding: 10px 15px !important;
        color: #fff;
        text-align: center;
    }

    .nav-link:hover{
        color: var(--secondary-color);
    }

    .active-link{
        color: var(--secondary-color);
        font-weight: bold;
    }
</style>
