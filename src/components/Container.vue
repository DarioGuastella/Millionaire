<script>
import Answer from "./Answer.vue"
import Question from "./Question.vue"
import { store } from "../store.js"

export default {
    data() {
        return {
            store,
            clickedAnswer: null,
            correctAnswer: null
        }
    },

    components: {
        Answer,
        Question
    },
    methods: {
        //Switcho le domande utilizzando il contatore nello store.
        switchQuestion() {
            this.store.Counter++;
            this.clickedAnswer = null;
            this.correctAnswer = null;
        },

        //ricarico la pagina al click.
        resetPartita() {
            window.location.reload();
            this.correctAnswer = null;
        },

        checkAnswer(index, risposta) {
            if (this.clickedAnswer === null) {
                this.clickedAnswer = index;
                if (risposta.AnswerValidity) {
                    this.correctAnswer = true;
                    setTimeout(() => {
                        this.switchQuestion();
                    }, 1500);
                } else {
                    this.correctAnswer = false;
                }

            }

        },

    }
}

</script>
<template>
    <Question />
    <template v-if="this.store.Counter <= this.store.Questions.length - 1">
        <Answer v-for="(risposta, index) in this.store.Questions[this.store.Counter].Answers" :data="risposta.Answer"
            :key="index" @click="checkAnswer(index, risposta)"
            :class="{ 'bg-green': clickedAnswer === index && risposta.AnswerValidity, 'bg-red': clickedAnswer === index && !risposta.AnswerValidity }" />
    </template>
    <button class="text-3xl text-green" v-if="this.store.Counter > this.store.Questions.length - 1"
        @click="resetPartita">
        Riavvia partita
    </button>
    <div v-if="this.correctAnswer == false">
        <p class="text-3xl">Risposta sbagliata! il tuo record è di {{ store.Counter }}
            risposte esatte
        </p>
        <button class="py-5 text-3xl text-green" @click="resetPartita">
            Riavvia partita
        </button>
    </div>
</template>