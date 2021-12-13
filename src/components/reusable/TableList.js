import { Table, Spinner, Card, Row } from "react-bootstrap";

import RenderDeleteButton from "../DeleteButton";
import RenderEditButton from "../EditButton";

const TableList = ({ list, loading, titleHeader }) => {
  const RenderTable = (list) => {
    return list.length === 0 ? null :
      (
        list?.map(({ title, status, description, id }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td>{
                <Row className="d-flex justify-content-around m-0 p-0">
                  <RenderDeleteButton id={id} />
                  <RenderEditButton id={id} />
                </Row>
              }</td>
            </tr>
          )
        })
      )
  }

  const RenderLoading = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  return (
    <Card className="mt-5 mb-5 rounded">
      <Card.Body>
        <Card.Title>{titleHeader}</Card.Title>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? RenderLoading() : RenderTable(list)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default TableList;