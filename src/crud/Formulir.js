import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit}) => {
  return (
    <div>
      <h4>Tambah Menu</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Makanan</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={nama}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="deskripsi"
            value={deskripsi}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="harga">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            name="harga"
            value={harga}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulir;
