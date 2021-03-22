import React  from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../service/api';

export default class Entrada  extends React.Component {

    state = {
        plate: '',
      }
    
      handleChange = event => {
        this.setState({ plate: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const parking = {
          plate: this.state.plate
        };
    
        api.post(`/parking`, {...this.state})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }


 render(){
    return (
        <div>
            <Form id="entrada" onSubmit={this.handleSubmit} >
                <Form.Group controlId="formValue">
                    <Form.Label>Número da placa:</Form.Label>
                    <Form.Control className="text-uppercase" type="text" placeholder="AAAA-0000" name="plate" onChange={this.handleChange} />
                </Form.Group>
                <Button type="submit" value="salvar">
                    CONFIRMAR ENTRADA
                </Button>
            </Form>
        </div>
    );
 }
};
