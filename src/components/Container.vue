<script>
import Answer from "./Answer.vue"
import Question from "./Question.vue"
import { store } from "../store.js"

export default {
    data() {
        return {
            store
        }
    },

    components: {
        Answer,
        Question
    },
    methods: {
        switchQuestion() {
            this.store.Counter++
        }
    }
}

</script>
<template>
    <Question />
    <button @click="this.switchQuestion">Cambia domanda</button>
</template>