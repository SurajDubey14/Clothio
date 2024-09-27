import React from 'react'
import style from "../Discount/discount.module.css"
const Discount = () => {
  return (
    <>
    <div className={style.discount}>
        <div className={style.disContainer}>
            <div className={style.disCard}>
                Flat Rs. 100 off on purchase of Rs. 2000
            </div>
            <div className={style.disCard}>
                Flat Rs. 100 off on purchase of Rs. 2000
            </div>
            <div className={style.disCard}>
                Flat Rs. 100 off on purchase of Rs. 2000
            </div>
        </div>
    </div>
    </>
  )
}

export default Discount
