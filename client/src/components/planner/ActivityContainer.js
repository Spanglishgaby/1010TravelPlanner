import { useEffect } from "react";
import { ActivityCard } from "./ActivityCard";
import { Container, Grid } from "semantic-ui-react";

export const ActivityContainer = ({ activities, setActivities }) => {
  let activityArray = activities.map((activity) => (
    <ActivityCard key={activity.id} activity={activity} />
  ));

  useEffect(() => {
    getActivities();
  }, []);

  const getActivities = () => {
    fetch("/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Last Activities :</h1>
        <Grid columns={3} divided>
          <Grid.Row>{activityArray}</Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
