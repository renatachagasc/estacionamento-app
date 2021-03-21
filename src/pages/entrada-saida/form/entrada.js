import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Entrada = (props) => {

    const initialValue = {
        placa: ''
    }
    let [ values, setValues ] = useState(initialValue)

    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }
    const manipuladorFormEnvio = e => {
        e.preventDefault();
        props.addEdit(values)
    }

    return (
        <div>
            <Form id="entrada" onSubmit={manipuladorFormEnvio} >
                <Form.Group controlId="formValue">
                    <Form.Label>Número da placa:</Form.Label>
                    <Form.Control type="text" placeholder="AAA-0000" name="placa" value={values.placa} onChange={manipuladorInputChange} />
                </Form.Group>
                <Button type="submit" value="salvar">
                    CONFIRMAR ENTRADA
                </Button>
            </Form>
        </div>
    );
};

export default Entrada;