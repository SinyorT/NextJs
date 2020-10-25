import '../styles/globals.css'

import App from 'next/app'
class MovieApp extends App {
    render(){
      //Component holds page you are navigating to
      const {Component} =this.props

      return(
        <Component />
      )
    }
}

export default MovieApp
