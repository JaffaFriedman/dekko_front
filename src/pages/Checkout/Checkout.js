import { Component } from 'react'
import { Form  } from 'bootstrap-4-react'

export default class App extends Component {
  render () {
    return (
      <Form>
        <Form.Group>
          <label htmlFor='ancho'>Ancho</label>
          <Form.Input
            type='number'
            id='ancho'
            placeholder='Ingrese el ancho en cm'
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor='alto'>Alto</label>
          <Form.Input
            type='number'
            id='alto'
            placeholder='Ingrese el alto en cm'
          />
        </Form.Group>
      </Form>
    )
  }
}
