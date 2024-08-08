import { Carousel } from '@mantine/carousel';
import { Card, Text, Avatar, Group, Anchor } from '@mantine/core';
import testimonials from '../../config/testimonials.json';
import { TestimonialCardProps, Testimonial } from '../../types/testimonials';

function TestimonialCard({ name, image, jobTitle, testimonial, link }: TestimonialCardProps) {
  return (
    <Card shadow="sm" padding="lg" style={{ maxWidth: 400, margin: 'auto' }}>
      <Group>
        <Avatar src={image} radius="xl" />
        <div>
          <Text fw={500}>{name}</Text>
          <Text size="sm" color="dimmed">{jobTitle}</Text>
          <Text size="sm" color="dimmed">{testimonial}</Text>
          <Anchor href={link} target="_blank" rel="noopener noreferrer">Read more</Anchor>
        </div>
      </Group>
    </Card>
  );
}

export function TestimonialsCarousel() {
  return (
    <Carousel withIndicators height={400} slideSize="33.333333%" slideGap="md" loop align="start">
      {testimonials.map((testimonial: Testimonial, index: number) => (
        <Carousel.Slide key={index}>
          <TestimonialCard name={testimonial.name} image={testimonial.image} testimonial={testimonial.testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
