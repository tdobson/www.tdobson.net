import React from "react";
import { Text, Container, Title, Space, Box, Stack } from "@mantine/core";
import classes from "./Rates.module.css";

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>My usual* rates are:</Title>

        <Space h="md" />
        <Box className={classes.ratesBox}>
          <Stack gap="xs">
            <Text>Remote work: £300/day</Text>
            <Text>Onsite work within 20 miles of Stockport: £400/day</Text>
          </Stack>
        </Box>

        <Text className={classes.footnote}>
          * Discounts may be available for reduced payment terms, upfront
          payment and longer commitments.
        </Text>
      </Container>
    </div>
  );
}
