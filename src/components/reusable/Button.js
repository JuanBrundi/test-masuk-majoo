import { Button } from "react-bootstrap";

const RenderButton = ({ text, onClick }) => {
  return <Button className="w-auto" onClick={onClick && onClick}>{text}</Button>
}

export default RenderButton;