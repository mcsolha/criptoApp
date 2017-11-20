<template>
    <div id="app">
        <navbar :active-link="currentComponent.name" @component-change="changeComponent($event)"></navbar>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
import Navbar from './components/navbar/Index.vue';
import Cripto from './components/cripto/Index.vue';
import About from './components/about/Index.vue';

export default {
    name: 'app',

    components: {
        Navbar,
        Cripto,
        About,
    },

    data: () => ({
        currentComponent: Cripto,
    }),

    methods: {
        changeComponent (name) {
            return name === 'home'
                ? this.currentComponent = Cripto
                : this.currentComponent = About;
        },
    },
}
</script>

<style>

</style>
