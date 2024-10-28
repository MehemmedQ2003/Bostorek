<template>
    <section>
        <div class="container">
            <SectionHeader title="Home" text="Home text" />
        </div>
    </section>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    export default {
        name: 'HomeView',
        components: {
            SectionHeader,
        },
    }
</script>

<style scoped>
    h1{
        color: green;
    }
</style>