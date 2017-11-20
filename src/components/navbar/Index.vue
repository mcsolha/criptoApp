<template>
    <nav>
        <div class="nav-wrapper">
            <div class="row">
                <div class="col s12">
                    <a href="#" class="brand-logo">CriptoApp</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li :class="isActiveLink('home')" @click="changeComponent('home')">
                            <a>Home</a>
                        </li>
                        <li :class="isActiveLink('about')" @click="changeComponent('about')">
                            <a>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        activeLink: {
            type: String,
            default: 'home',
            required: true,
        },
    },

    methods: {
        isActiveLink (link) {
            return {
                'active': this.activeLink == link,
            };
        },

        changeComponent (component) {
            this.$emit('component-change', component);
        },
    },
};
</script>
