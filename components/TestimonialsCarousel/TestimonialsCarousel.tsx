import { Carousel } from '@mantine/carousel';
import {Card, Text, Avatar, Group, Anchor, Title, Space} from '@mantine/core';
import testimonials from '../../config/testimonials.json';
import { TestimonialCardProps, Testimonial } from '../../types/testimonials';

function TestimonialCard({ name, image, jobTitle, testimonial, link }: TestimonialCardProps) {
  return (
  <Card shadow="sm" padding="lg" style={{maxWidth: '100%', margin: 'auto'}}>
    <Group>
      <Avatar src={image} radius="xl"/>
      <div>
        <Anchor href={link} target="_blank" rel="noopener noreferrer">
          <Text fw={500}>{name}</Text>
        </Anchor>
        <Text size="sm" color="dimmed">{jobTitle}</Text>
      </div>
    </Group>
    <Text size="sm" mt="md">{testimonial}</Text>
  </Card>
)
  ;
}

import styles from './TestimonialsCarousel.module.css';

export function TestimonialsCarousel() {
  return (<div>
      <div style={{textAlign: 'center'}} className="title-spacing">
        <Title order={2}>What people say about me</Title>
        <Space/>
      </div>
      <div className={styles.carouselContainer}>
  <Carousel 
    withIndicators 
    height={400} 
    slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
    slideGap={{ base: 'xs', sm: 'md' }}
    loop 
    align="start"
    breakpoints={[
      { maxWidth: 'sm', slideSize: '100%' },
      { maxWidth: 'md', slideSize: '50%' },
    ]}
  >
    {testimonials.map((testimonial: Testimonial, index: number) => (
        <Carousel.Slide key={index}>
          <TestimonialCard
            name={testimonial.name}
            image={testimonial.image}
            jobTitle={testimonial.jobTitle}
            testimonial={testimonial.testimonial}
            link={testimonial.link}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
      </div></div>
  );
}
