import { Carousel } from '@mantine/carousel';
import { Card, Text, Avatar, Group } from '@mantine/core';
import testimonials from '../../config/testimonials.json';

function TestimonialCard({ name, image, testimonial }) {
  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 400, margin: 'auto' }}>
      <Group>
        <Avatar src={image} radius="xl" />
        <div>
          <Text weight={500}>{name}</Text>
          <Text size="sm" color="dimmed">{testimonial}</Text>
        </div>
      </Group>
    </Card>
  );
}

export function TestimonialsCarousel() {
  return (
    <Carousel withIndicators height={400} slideSize="33.333333%" slideGap="md" loop align="start">
      {testimonials.map((testimonial, index) => (
        <Carousel.Slide key={index}>
          <TestimonialCard name={testimonial.name} image={testimonial.image} testimonial={testimonial.testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
