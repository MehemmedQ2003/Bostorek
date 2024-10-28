<template>
    <section>
        <div class="container">
            <SectionHeader title="Contact" text="Contact text" />
        </div>
    </section>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    export default {
        name: 'ContactView',
        components: {
            SectionHeader,
        },
    }
</script>

<style scoped>
    h1{
        color: orange;
    }
</style>