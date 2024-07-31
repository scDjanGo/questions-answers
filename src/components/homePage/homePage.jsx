import './style.scss'
import { useEffect, useState } from 'react'

function HomePage() {
    const [on, setOn] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        const myResults = JSON.parse(localStorage.getItem('data'))

        if(myResults) {
            let order = [0, 0]
            for(let key in myResults) {
                if(key !== "answer") {
                    order[0] += myResults[key]
                }else {
                    order[1] = myResults[key]
                }
            }
            setResult(order)
        }else {
            setResult(null)
        }

    }, [on])

    const handleClear =() => {
        localStorage.clear()
        setOn(prev => !prev)
    }

    return (
        <main className="homePage-container">

            {result ?
             <div className="result">
                <h2>Результат</h2>
                <p>Правилных ответ : {result[0]} из {result[1]}</p>
                <button onClick={handleClear}>Перепройти</button>
             </div>
             : 
             <div className="inner">
                <h2>hello world.</h2>
 
                <p>"Выражение — это комбинация свойств и значений в переменных, функциях и других операциях, которые могут быть интерпретированы по правилам определённого языка."</p>
             </div>
            }

        </main>
    )
}

export {HomePage}