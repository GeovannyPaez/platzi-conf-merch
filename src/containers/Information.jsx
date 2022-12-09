import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import '../styles/Information.css'
function Information() {
  const navigate = useNavigate();
  const {state:{cart}, addToBuyer}= useContext(AppContext);
  const form= useRef(null);

  const handleSubmit=()=>{
    const formData = new FormData(form.current);
    const buyer= {
      'name':formData.get('name'),
      'email':formData.get('email'),
      'address':formData.get('address'),
      'apto':formData.get('apto'),
      'city':formData.get('city'),
      'country':formData.get('country'),
      'state':formData.get('state'),
      'cp':formData.get('cp'),
      'phone':formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <main className="Information">
      <section className="Information-content">
        <article className="Information-head">
          <h2>Informacion de Contacto:</h2>
        </article>
        <article className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre Completo' name="name" id="" />
            <input type="email" placeholder='Correo Electronico' name="email" id="" />
            <input type="text" placeholder='Direccion' name="address" id="" />
            <input type="text" placeholder='Apto' name="apto" id="" />
            <input type="text" placeholder='Ciudad' name="city" id="" />
            <input type="text" placeholder='Pais' name="country" id="" />
            <input type="text" placeholder='Estado' name="state" id="" />
            <input type="text" placeholder='Codigo Postal' name="cp" id="" />
            <input type="text" placeholder='Telefono' name="phone" id="" />
          </form>
        </article>
        <article className="Information-buttons">
          <div className="Infortmation-back">
            <Link to={'/checkout'}>Regresar</Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </article>
      </section>
      <aside className="Information-sidebar">
        <article className="Information-element">
          {cart.map(i=> (
            <div key={i.id+ 'info'}>
              <h4>{i.title} x {i.countCart}</h4>
              <span>${i.price}</span>
            </div>
          ))}
        </article>
      </aside>
    </main>
  )
}

export default Information

