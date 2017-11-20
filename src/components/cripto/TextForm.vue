<template>
    <div
        class="row"
    >
        <form
            class="col s12"
            @submit.prevent="onSubmit()"
        >
            <div
                class="row"
            >
                <div
                    class="input-field col s12"
                >
                    <textarea
                        class="materialize-textarea"
                        v-model="text"
                        ref="textarea"
                    ></textarea>
                    <label
                        for="textarea1"
                        :class="activeClass"
                    >
                        {{labelArea}}
                    </label>
                </div>
            </div>
            <div
                class="row"
            >
                <button
                    class="btn waves-effect waves-light col s2 push-s10"
                    type="submit"
                    name="action"
                >
                    {{labelButton}}
                    <i
                        class="material-icons right"
                    >send</i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        labelArea: {
            type: String,
            default: 'Textarea',
        },

        labelButton: {
            type: String,
            default: 'Submit',
        },

        content: {
            type: String,
            default: '',
        },

        isActive: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        text: '',
    }),

    computed: {
        activeClass () {
            return {
                'active': this.isActive,
            };
        }
    },

    watch: {
        content () {
            this.text = this.content;
            this.$refs.textarea.dispatchEvent(new Event("autoresize"));
        },
    },

    methods: {
        onSubmit () {
            this.$emit(this.labelButton.replace('!',''), this.text);
        },
    },
};
</script>
