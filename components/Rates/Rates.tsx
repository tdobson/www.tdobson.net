import React from 'react';
import { Text, Container, Title, Space, Box, Stack } from '@mantine/core';
import classes from './Rates.module.css';

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Rates</Title>

        <Space h="md" />
        <Text className={classes.description}>
          My usual* rates are:
        </Text>
        <Box className={classes.ratesBox}>
          <Stack spacing="xs">
            <Text>Remote work: £300/day</Text>
            <Text>Onsite work within 20 miles of Stockport: £400/day</Text>
          </Stack>
        </Box>

        <Text className={classes.footnote}>
          * Discounts may be available for reduced payment terms, upfront payment and longer commitments.
        </Text>
      </Container>
    </div>
  );
}
