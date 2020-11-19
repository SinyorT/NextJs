
import { useState } from 'react'

const SideMenu = (props) => {
    const { categories } = props

    return (
        <div>
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