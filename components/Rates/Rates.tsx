import React from 'react';
import { Text, Container, Title } from '@mantine/core';
import classes from './Rates.module.css';

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Rates & Working Hours</Title>
        <Text className={classes.description}>
          My usual working hours are 10am-6pm, Mon-Fri, UK time.
        </Text>
        <Text className={classes.description}>
          Rates: £300/day for remote work, £400/day for onsite work within 20 miles of Stockport.
        </Text>
      </Container>
    </div>
  );
}
