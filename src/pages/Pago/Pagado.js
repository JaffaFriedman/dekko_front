import { useEffect } from "react"


export const SuccessPurchase = () => {

  useEffect( () => {
    fetch('http://mibackend.com/payment/succes')
  }, [])

  return (
    <>
    <h1>
      Tu compra ha sido un éxito
    </h1>
    </>
  )
}



