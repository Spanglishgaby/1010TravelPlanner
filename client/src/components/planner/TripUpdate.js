import { Button, Form, Container } from "semantic-ui-react";
import { useState } from "react";

const TripUpdate = ({ handleUpdate, setTrips, trip, setWasClicked, index }) => {
  const [title, setTitle] = useState(trip.title);
  const [description, setDescription] = useState(trip.description);
  const [date, setDate] = useState(trip.date);
  const [total_budget, setTotal_budget] = useState(trip.total_budget);

  const updateTrip = {
    title: title || "",
    description: description || "",
    date: date || "",
    total_budget: total_budget || "",
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`trips/${trip.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTrip),
    })
      .then((r) => r.json())
      .then((data) => {
        handleUpdate(data);
        setWasClicked(false);
      });
  }
  return (
    <Container className="cardTrip2">
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Title</label>
          <input
            value={updateTrip.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>description</label>
          <input
            value={updateTrip.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>date</label>
          <input
            value={updateTrip.date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>total_budget</label>
          <input
            value={updateTrip.total_budget}
            onChange={(e) => setTotal_budget(e.target.value)}
          />
        </Form.Field>
        <Button>Update information</Button>
      </Form>
    </Container>
  );
};

export default TripUpdate;
