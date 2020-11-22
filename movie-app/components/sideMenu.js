
import { useState } from 'react'
import {useRouter} from 'next/router'
import  Modal  from '../components/modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions/index'




const SideMenu = (props) => {
    const { categories } = props
    let modal = null
    const router=useRouter()

const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // Close modal after create 
      modal.closeModal()
      router.push('/')
    })
  }
    return (
        <div>
            
            <Modal  ref={ele => modal = ele}  hasSubmit={false}>
                 <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
           
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(category => (
                        <a 
                        onClick={() => props.changeCategory(category.name)}
                        key={category.id}
                        href="#" 
                        className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>{category.name}</a>
                    ))}
            </div>
            <div>
            </div>
        </div>




    )
}

export default SideMenu