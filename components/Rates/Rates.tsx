import React from 'react';
import { Text, Container, Title } from '@mantine/core';
import classes from './Rates.module.css';

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Rates</Title>
        <Text className={classes.description}>
            £300/day for remote work<br />
          £400/day for onsite work within 20 miles of Stockport.
        </Text>
      </Container>
    </div>
  );
}
