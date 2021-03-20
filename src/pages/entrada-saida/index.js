import React , { useState } from 'react';
import '../../App.css';
import { Container, Row, Col, Button, Tab, Tabs, Form } from 'react-bootstrap';



const EntradaSaida = ({ onSubmit }) => {

    const [newItem, setNewItem] = useState('');

    function setPlaca({target}) {
      setNewItem(target.value);
    }
  
    function submit(e) {
      e.preventDefault();
      onSubmit(newItem);
    }

    return (
        <div>
           <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="4">
                        <Tabs defaultActiveKey="entrada" id="uncontrolled-tab-example" className="justify-content-around">
                            <Tab eventKey="entrada" title="Entrada">
                                <Form id="entrada" onSubmit={submit}>
                                    <Form.Group controlId="formValue">
                                        <Form.Label>Número da placa:</Form.Label>
                                        <Form.Control type="text" placeholder="AAA-0000" onChange={setPlaca} />
                                    </Form.Group>
                                    <Button type="submit">
                                        CONFIRMAR ENTRADA
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="saida" title="Saída">
                                <Form id="saida">
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Número da placa:</Form.Label>
                                        <Form.Control type="text" placeholder="AAA-0000" />
                                    </Form.Group>
                                    <Button type="submit">
                                        PAGAMENTO
                                    </Button>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EntradaSaida;