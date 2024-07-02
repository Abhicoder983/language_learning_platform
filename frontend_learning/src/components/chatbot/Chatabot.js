import React from 'react'
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const Chatabot = () => {

    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our website Lingohub",
            trigger: "Ask Name",
        },
        {
            id: "Ask Name",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue},  Are you excited to know about our website..... select option",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                { value: "yes", label: "yes", trigger: "yes" },
                { value: "no", label: "no", trigger: "no" },
            ],
        },
        {
            id: 'yes',
            message: 'Thanks for selecting yes , so Our platform offers a dynamic way to master new languages, providing interactive lessons, immersive experiences, and personalized learning paths. Whether you are a beginner or aiming for fluency, embark on your linguistic journey with us.Explore diverse cultures, practice with native speakers, and unlock the power of communication.Start your adventure today and broaden your horizons with our innovative language learning platform!',
            end: true,
        },
        {
            id: 'no',
            message: 'i am very disappointing!!!',
            end: true,
        }

    ]

    return (
        <>
            <Segment floated="right">
                <Chatbot headerTitle="chat"
                    speechSynthesis={{ enable: true, lang: 'hi-IN' }} steps={steps} />
            </Segment>

        </>
    )
}

export default Chatabot
