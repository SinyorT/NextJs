
import { useState } from 'react'

const SideMenu = () => {
    const [count, setCount] = useState(0)


    const increment = () => {
         const newCount=count+1
         setCount(newCount)
    }

    const decrement = () => {
        const newCount=count-1
        setCount(newCount)
    }



    return (
        <div>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>

            <div>
                {/* 2ci yol burada click de function yazmaq */}
                <button onClick={increment} className="btn btn-primary">Increment Number</button>
                <button onClick={decrement} className="btn btn-primary">Decrement Number</button>
                <h1>{count}</h1>
            </div>
        </div>




    )
}

export default SideMenu