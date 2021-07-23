import React, {useState, useEffect} from 'react'
import styles from '../styles/Calculator.module.css'

function Price({text, price}) {
    return (
        <div className={styles.price}>
            <h2>{text}<br /><h3>/ person</h3></h2>
            <div><h1>${price}</h1></div>
        </div>
    )
}

function Calculator() {

    const [value, setValue] = useState(10)
    const [tipMultiplier, setTipMultiplier] = useState(1.25)
    const [people, setPeople] = useState(1)
    const [tip, setTip] = useState((tipMultiplier * value) / people)
    const [total, setTotal] = useState((tipMultiplier * value) / people)

    useEffect(()=>{
        setTip(((tipMultiplier-1) * value) / people)
        setTotal((tipMultiplier * value) / people)
    }, [value, tipMultiplier, people])

    return (
        <div id={styles.calculator}>
            <form className={styles.form}>
                <label id={styles.bill}>Bill</label>
                <input type='number' className={styles.textBox} placeholder='0' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                <label id={styles.tip}>Select Tip %</label>
                <div className={styles.buttonGrid}>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.05) }}>5%</button>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.1) }}>10%</button>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.15) }}>15%</button>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.2) }}>20%</button>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.25) }}>25%</button>
                    <button onClick={(e) => { e.preventDefault(); setTipMultiplier(1.3) }}>30%</button>
                </div>
                <label id={styles.people}>Number Of People</label>
                <input type='number' className={styles.textBox} placeholder={1} value={people} onChange={(e) => { setPeople(e.target.value) }} />
            </form>
            <div className={styles.results}>
                <Price text={'Tip amount'} price={tip.toFixed(2)}/>
                <Price text={'Total'} price={total.toFixed(2)}/>
                <div>
                    <h1 className={styles.currentTip}>Current tip percent: {((tipMultiplier - 1)*100).toFixed(2)}%</h1>
                </div>
            </div>
        </div>
    )
}

export default Calculator
