import React from "react";
import { useState } from "react";
import { Button, Form, Container, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ActivityContainer } from "./ActivityContainer";

const CreateActivities = ({ activities, setActivities, trips, user }) => {
  const [trip_id, setTrip_id] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const newActivity = {
    trip_id: trip_id,
    user_id: user.id,
    description: description,
    price: price,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newActivity),
    })
      .then((r) => r.json())
      .then((data) => {
        setActivities((currentActivities) => [...currentActivities, data]);
      });
  }
  return (
    <Container>
      <Message>
        <Message.Header>Return to Current Trip</Message.Header>
        <Link to="/planner">
          <Button color="blue">Return</Button>
        </Link>
      </Message>

      <Form>
        <Form.Field>
          <h3 className="label">Trip:</h3>
          <select
            placeholder="Select a Trip"
            onChange={(e) => setTrip_id(e.target.value)}
          >
            <option value="none">Select a Trip:</option>
            {trips.map((trip) => (
              <option key={trip.id} value={trip.id}>
                {trip.title}
              </option>
            ))}
          </select>
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Button onClick={handleSubmit} type="submit">
          Create Activity
        </Button>
      </Form>
      <ActivityContainer
        setActivities={setActivities}
        activities={activities}
      />
    </Container>
  );
};

export default CreateActivities;
