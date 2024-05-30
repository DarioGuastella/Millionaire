import { reactive } from 'vue'

export const store = reactive({
    Questions: [
        {
            Question: "Chi è stato il tuo primo insegnante?",
            Answers: [
                {
                    Answer: "Luca",
                    AnswerValidity: true,
                    isPending: false
                },
                {
                    Answer: "Paolo",
                    AnswerValidity: false,
                    isPending: false
                },
                {
                    Answer: "Nikolas",
                    AnswerValidity: false,
                    isPending: false
                },
                {
                    Answer: "Mauro",
                    AnswerValidity: false,
                    isPending: false
                }
            ]
        },
        {
            Question: "Qual è stato il tuo progetto finale?",
            Answers: [
                {
                    Answer: "Boolflix",
                    AnswerValidity: false,
                    isPending: false
                },
                {
                    Answer: "Spotify",
                    AnswerValidity: false,
                    isPending: false
                },
                {
                    Answer: "Boolzapp",
                    AnswerValidity: false,
                    isPending: false
                },
                {
                    Answer: "Deliveboo",
                    AnswerValidity: true,
                    isPending: false
                }
            ]
        },

    ],
    Counter: 0,
    endGameMsg: "Congratulazioni, hai finito il gioco!"
});