import { reactive } from 'vue'

export const store = reactive({
    Questions: [
        {
            Question: "Chi è stato il tuo primo insegnante?",
            Answers: [
                {
                    Answer: "Luca",
                    AnswerValidity: true
                },
                {
                    Answer: "Paolo",
                    AnswerValidity: false
                },
                {
                    Answer: "Nikolas",
                    AnswerValidity: false
                },
                {
                    Answer: "Mauro",
                    AnswerValidity: false
                }
            ]
        },
        {
            Question: "Qual è stato il tuo progetto finale?",
            Answers: [
                {
                    Answer: "Boolflix",
                    AnswerValidity: false
                },
                {
                    Answer: "Spotify",
                    AnswerValidity: false
                },
                {
                    Answer: "Boolzapp",
                    AnswerValidity: false
                },
                {
                    Answer: "Deliveboo",
                    AnswerValidity: true
                }
            ]
        },

    ],
    Counter: 0
});