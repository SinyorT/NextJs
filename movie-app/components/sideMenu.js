
import { useState } from 'react'
import  Modal  from '../components/modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions/index'

const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // Close modal after create
      console.log(JSON.stringify(movies))
    })
  }


const SideMenu = (props) => {
    const { categories } = props

    return (
        <div>
            
            <Modal hasSubmit={false}>
                 <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
           
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(category => (
                        <a 
                        key={category.id}
                        href="#" 
                        className="list-group-item">{category.name}</a>
                    ))}
            </div>
            <div>
            </div>
        </div>




    )
}

export default SideMenu