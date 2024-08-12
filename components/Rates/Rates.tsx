import React from 'react';
import { Text, Container, Title, Space } from '@mantine/core';
import classes from './Rates.module.css';

export function Rates() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title}>Rates</Title>
        <Text className={classes.description}>
          I'm committed to helping everyone, regardless of their financial situation. If budget is a concern, please don't hesitate to reach out - we can discuss options that work for you.
        </Text>
        <Space h="md" />
        <Text className={classes.description}>
          My standard rates are:
        </Text>
        <Text className={classes.description}>
          £300/day for remote work<br />
          £400/day for onsite work within 20 miles of Stockport.
        </Text>
        <Space h="md" />
        <Text className={classes.footnote}>
          * Discounts are available for reduced payment terms, upfront payment, and longer commitments.
        </Text>
      </Container>
    </div>
  );
}
