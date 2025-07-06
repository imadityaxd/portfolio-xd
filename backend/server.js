import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 0,
            setup: "Why did the feminist bring a ladder to the meeting?",
            punchline: "To smash the glass ceiling... from the top down!"
        },
        {
            id: 1,
            setup: "Why don’t feminists ever lose at chess?",
            punchline: "Because they make all the right moves and never play second to a king."
        },
        {
            id: 2,
            setup: "What do you call a man explaining feminism to a feminist?",
            punchline: "A ‘mansplainer’ heading for a verbal knockout."
        },
        {
            id: 3,
            setup: "Why did the feminist refuse to use Google Maps?",
            punchline: "Because she refuses to be told where to go by a male voice."
        },
        {
            id: 4,
            setup: "How many feminists does it take to change a light bulb?",
            punchline: "One. She just holds it up and waits for the world to revolve around equality."
        }
    ];
    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})