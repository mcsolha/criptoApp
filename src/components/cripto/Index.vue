<template>
    <div class="container">
        <text-form
            label-area="Criptografar"
            label-button="cripto!"
            :content="criptado"
            :is-active="cActive"
            @cripto="cripto($event)"
        ></text-form>
        <text-form
            label-area="Descriptografar"
            label-button="decripto!"
            :content="decriptado"
            :is-active="decActive"
            @decripto="decripto($event)"
        ></text-form>
    </div>
</template>

<script>
import TextForm from './TextForm.vue';
import {
    startCripto,
    startDecripto,
} from '../../js/cripto.js';

export default {
    name: 'home',

    components: {
        TextForm,
    },

    data: () => ({
        criptado: '',
        decriptado: '',
    }),

    computed: {
        cActive () {
            return this.criptado !== '';
        },

        decActive () {
            return this.decriptado !== '';
        },
    },

    methods: {
        cripto (text) {
            this.decriptado = startCripto(text);
        },

        decripto (text) {
            this.criptado = startDecripto(text);
        },
    },
};
</script>

<style scoped>
.container {
    padding-top: 1em;
}
</style>

