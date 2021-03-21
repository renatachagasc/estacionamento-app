import React from 'react';
import { Button, Form } from 'react-bootstrap';


const Saida = () => {  

    return (
        <div>
            <Form id="saida">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Número da placa:</Form.Label>
                    <Form.Control type="text" placeholder="AAA-0000" />
                </Form.Group>
                <Button type="submit">
                    PAGAMENTO
                 </Button>
            </Form>
        </div>
    );
};

export default Saida;