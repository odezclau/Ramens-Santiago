import { useState } from 'react'
import { AppSubtitle, Container } from "../common"
import { saveDataFormContact } from '../../services/firebase'

const initialForm = {
  nombre: '',
  telefono: '',
  correo: '',
  mensaje: ''
}

export const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value.trimStart()
    })
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const { nombre, telefono, correo, mensaje } = form

    if (nombre.length < 1
      && telefono.length < 1
      && correo.length < 1
      && mensaje.length < 1) return

    try {
      setIsLoading(true)
      await saveDataFormContact(form)
      setIsLoading(false)
    } catch (err) {
      console.log(err);
      setIsLoading(false)
    }

    setForm(initialForm)
  }


  return (
    <Container>
      <AppSubtitle
        subTitle='Puedes contactarnos por esta via. 👋'
      />
      <div className='contacto'>
        <form className='contacto__form' onSubmit={handleSubmitForm}>
          <label htmlFor="nombre">
            Nombre
            <input
              required
              type="text"
              name='nombre'
              value={form.nombre}
              onChange={handleInputChange} />
          </label>
          <label htmlFor="telefono">
            Telefono
            <input
              required
              type="text"
              name='telefono'
              value={form.telefono}
              onChange={handleInputChange} />
          </label>
          <label htmlFor="correo">
            Correo
            <input
              required
              type="email"
              name='correo'
              value={form.correo}
              onChange={handleInputChange} />
          </label>
          <label htmlFor="mensaje">
            Mensaje
            <textarea
              required
              type='text'
              name="mensaje"
              value={form.mensaje}
              onChange={handleInputChange}></textarea>
          </label>
          <button type='submit' disabled={isLoading}>{isLoading ? 'Enviando...' : 'Enviar '} </button>
        </form>
      </div>
    </Container>
  )
}
