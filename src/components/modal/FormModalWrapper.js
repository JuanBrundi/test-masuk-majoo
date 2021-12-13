import { useState } from "react";
import { Modal } from "react-bootstrap";

import Button from "../reusable/Button";
import RenderListForm from "../reusable/ListForm";

import { getListById } from "../../store/actions";
import { useDispatch } from "react-redux";

function RenderModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RenderListForm onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

function FormModalWrapper({ text, id }) {
  const dispatch = useDispatch()

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button text={text} onClick={() => {
        console.log(id, "ID NO BOSSSSSS")
        if (id) {
          dispatch(getListById(id))
        }
        setModalShow(true)
      }} />
      <RenderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default FormModalWrapper;