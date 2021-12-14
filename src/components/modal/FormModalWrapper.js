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
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RenderListForm
          actions={props.actions}
          confirmationText={props.text}
          actionName={props.actionName}
          onHide={props.onHide}
          idEdit={props.idEdit}
        />
      </Modal.Body>
    </Modal>
  );
}

function FormModalWrapper({
  text,
  id,
  modalTitle,
  actionName,
  actions,
  idEdit
}) {
  const dispatch = useDispatch()

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        text={actionName}
        onClick={() => {
          if (id) {
            dispatch(getListById(id))
          }
          setModalShow(true)
        }}
      />
      <RenderModal
        modalTitle={modalTitle}
        show={modalShow}
        onHide={() => setModalShow(false)}
        actionName={actionName}
        text={text}
        actions={actions}
        idEdit={idEdit}
      />
    </>
  );
}

export default FormModalWrapper;