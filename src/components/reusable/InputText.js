import { Form, Col } from "react-bootstrap"

const InputText = ({ text, onChangeText, value, type }) => {
  return (
    <Form.Group className="mb-2" as={Col} controlId={`form${text}`}>
      <Form.Label className="text-capitalize">{text}</Form.Label>
      <Form.Control
        onChange={onChangeText}
        type={`${text}`}
        placeholder={`Enter ${text}`}
        value={value} isValid={value}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  )
}

export default InputText;