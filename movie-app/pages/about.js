
import React from 'react'

//functional compponent  -arrow function
const About = () =>{
    const message='Hello World'
    return(
    <h1>Hello - {message}</h1>
    )
}
  //functional tag ismini vererek ve ichindeki text yazaraq
//  const About = () =>{
//     const message='Hello World'
//     return React.createElement('h1',null,'I am genereting with createElement')
// }

//functional compponent  -normal function
// function About(){
//     return (
//         <h1>Hello</h1>
//     )
// }

export default About