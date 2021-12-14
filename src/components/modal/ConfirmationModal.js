import { useState, useRef } from "react";
import { Popover, Overlay, Row } from "react-bootstrap";

import Button from "../reusable/Button";

function ConfirmationButton({ onClick, confirmationText, actionName }) {
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

    onClick && onClick()
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Row className="w-auto" ref={ref}>
      <Button text={actionName} onClick={handleCancel} />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">{confirmationText}</Popover.Header>
          <Popover.Body className="d-flex justify-content-between">
            <Button text={"Cancel"} onClick={handleCancel} />
            <Button text={"Yes"} onClick={handleYes} />
          </Popover.Body>
        </Popover>
      </Overlay>
    </Row>
  );
}

export default ConfirmationButton;