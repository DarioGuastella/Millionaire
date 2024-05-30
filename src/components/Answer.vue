<script>
import { store } from "../store.js"
export default {
    name: "Answer",
    props: {
        data: String
    },
    data() {
        return {
            store,
            myClass: ""
        }
    },
    methods: {

    }
}
</script>
<template>

    <span class="px-2">
        {{ data }}
    </span>

</template>