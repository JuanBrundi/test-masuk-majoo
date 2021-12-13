import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { Popover, Overlay, Row } from "react-bootstrap";

import Button from "./reusable/Button";

import { removeList } from "../store/actions";

function DeleteButton({ id }) {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleCancel = (event) => {
    event.preventDefault()

    setShow(!show);
    setTarget(event.target);
  };

  const handleYes = (event) => {
    event.preventDefault()

    dispatch(removeList(id))

    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Row className="w-auto" ref={ref}>
      <Button text={"Delete"} onClick={handleCancel} />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Are you sure you want to delete?</Popover.Header>
          <Popover.Body className="d-flex justify-content-between">
            <Button text={"Cancel"} onClick={handleCancel} />
            <Button text={"Yes"} onClick={handleYes} />
          </Popover.Body>
        </Popover>
      </Overlay>
    </Row>
  );
}

const RenderDeleteButton = ({ id }) => {
  return (
    <DeleteButton id={id} />
  )
}

export default RenderDeleteButton;