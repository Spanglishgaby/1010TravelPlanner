import TripCard from "./TripCard";
import "../../components/css/index.css";
import { Container, Grid } from "semantic-ui-react";
import ReviewCreate from "./ReviewCreate";
import CreateTrip from "./CreateTrip";

const CurrentTrips = ({ user, trips, setTrips, reviews, setReviews }) => {
  const handleDelete = (id) =>
    setTrips((current) => current.filter((p) => p.id !== id));
  const handleUpdate = (updatedTrip) =>
    setTrips((current) => {
      return current.map((trip) => {
        if (trip.id === updatedTrip.id) {
          return updatedTrip;
        } else {
          return trip;
        }
      });
    });

  let tripArray = trips.map((trip) => (
    <TripCard
      key={trip.id}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      trip={trip}
      setTrips={setTrips}
    />
  ));

  return (
    <div className="tripContainer">
      <Container style={{ marginTop: "50px" }}>
        <h1>Last Trips :</h1>
        <Grid columns={3} className="grid" >
          <Grid.Row>{tripArray}</Grid.Row>
        </Grid>
        <CreateTrip setTrips={setTrips} />
        <ReviewCreate user={user} reviews={reviews} setReviews={setReviews} />
      </Container>
    </div>
  );
};

export default CurrentTrips;
