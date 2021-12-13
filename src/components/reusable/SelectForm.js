import { Form, Col } from "react-bootstrap"

const SelectForm = ({ text, onChangeText, value, type }) => {
  return (
    <Form.Group className="mb-2" as={Col} controlId={`form${text}`}>
      <Form.Label className="text-capitalize">{text}</Form.Label>
      <Form.Select value={value} onChange={onChangeText} required aria-label="Default select example">
        <option value={null}>Select status</option>
        <option value={0}>0</option>
        <option value={1}>1</option>
      </Form.Select>
    </Form.Group>
  )
}

export default SelectForm;