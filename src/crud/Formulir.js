import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulir = () => {
  return (
    <div>
        <h4>Tambah Menu</h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    </div>   
  );
};

export default Formulir;
