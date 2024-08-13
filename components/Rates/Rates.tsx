import React from "react";
import { Text, Container, Title, Space, Grid, Box } from "@mantine/core";
import classes from "./Rates.module.css";

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>My usual* rates are:</Title>

        <Space h="md" />
        <Grid className={classes.ratesGrid}>
          <Grid.Col span={12} sm={6}>
            <Box className={classes.rateItem}>
              <Text weight={700}>Remote work:</Text>
              <Text size="xl">£300/day</Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={12} sm={6}>
            <Box className={classes.rateItem}>
              <Text weight={700}>Onsite work:**</Text>
              <Text size="xl">£400/day</Text>
            </Box>
          </Grid.Col>
        </Grid>

        <Text className={classes.footnote}>
          * Discounts may be available for reduced payment terms, upfront
          payment and longer commitments.
        </Text>
        <Text className={classes.footnote}>
          ** Within 20 miles of Stockport
        </Text>
      </Container>
    </div>
  );
}
