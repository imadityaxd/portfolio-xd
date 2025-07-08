
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Jokes() {
    const [jokes, setJokes] = useState([])
    useEffect(() =>{
        axios.get('/api/jokes')
        .then((response) => {
            setJokes(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

  return (
    <div className="border">
        
        <p>Jokes: {jokes.length}</p>
        {
            jokes.map( (joke, index) => {
                return (
                    <div key = {joke.id}>
                        <h3>{joke.setup}</h3>
                        <h3>{joke.punchline}</h3>
                        </div>
                )
            })
        }
        
    </div>
  )
}

export default Jokes