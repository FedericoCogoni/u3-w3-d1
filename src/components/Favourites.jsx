import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { StarFill } from "react-bootstrap-icons"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import "../App.css"
const Favourites = () => {
  const favourites = useSelector(state => state.favourite.list)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button className="button-53 my-3" role="button" onClick={() => navigate("/")}>
            Home
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i} className="my-2">
                <StarFill
                  color="gold"
                  className="m-2 star"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITE",
                      payload: fav,
                    })
                  }
                />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
