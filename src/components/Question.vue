<script>
import { store } from "../store.js"
export default {
    name: "Question",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div>
        <p class="text-3xl pb-4" v-if="this.store.Counter < this.store.Questions.length">
            {{ this.store.Questions[this.store.Counter].Question }}
        </p>
        <p v-else class="text-5xl pb-4">
            {{ this.store.endGameMsg }}
        </p>
    </div>
</template>
