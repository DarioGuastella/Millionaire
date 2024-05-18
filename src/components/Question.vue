<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div>
        <p>
            {{ this.store.Questions[this.store.Counter].Question }}
        </p>
    </div>
</template>