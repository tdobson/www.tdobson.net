import { Carousel } from '@mantine/carousel';
import { Card, Text, Avatar, Group } from '@mantine/core';

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
import { Carousel } from '@mantine/carousel';
import { Card, Text, Avatar, Group } from '@mantine/core';

const testimonials = [
  {
    name: "Gez O'Brien",
    image: "https://via.placeholder.com/150",
    testimonial: "I was having a server problem, the kind of problem you don't want. Enter Tim — firstly he was quick, getting straight onto the server and diagnosing beyond the hardware and checking the logs and sure enough, he finds the software problem. Beyond that, as that issue was beyond my people, he was able to recommend someone to fix that small issue and within the hour the service was back up. Problem solved. In short, Tim was fast, professional, analytical and problem-focused. Highly recommended."
  },
  {
    name: "Andrew Jancey",
    image: "https://via.placeholder.com/150",
    testimonial: "I have had the great pleasure of working with Tim in 2019 and what a fantastic experience it has been. Tim is extremely knowledgeable not only technically but also brilliant at Business Development. He is more than happy to share his experience and ways of working with others and I have learned from him. If you are thinking of working with Tim as a client or supporting him, I have absolutely no hesitation in telling you it will be a great experience and also fun. Another positive to share, he is so aware of cash flow for small businesses and always makes sure my invoices are paid on time. I highly recommend Tim as a great business innovator."
  },
  {
    name: "Una Cottrell",
    image: "https://via.placeholder.com/150",
    testimonial: "I’ve been on Tim’s outer circle for a number of years, but met him properly when he was a team member of a client of mine when I worked on-site for 12 months. Tim’s role was 100% client-facing and he excelled at this. Extremely customer-focused, he was considerate and treated clients with the utmost integrity and professionalism. It’s pleasing to see Tim has gone freelance. Be aware that anybody who works with Tim will receive nothing but the best service and attentiveness."
  },
  {
    name: "Paul Waring",
    image: "https://via.placeholder.com/150",
    testimonial: "Tim was one of the contact points for a managed hosting account provided to my employer. He was always quick to respond to support emails and follow up where necessary to make sure that issues had been resolved satisfactorily."
  },
  {
    name: "James Lawrie",
    image: "https://via.placeholder.com/150",
    testimonial: "Tim listens, and understands. He can listen to customer needs and understands the technical side enough to implement it himself if needed. This makes him a perfect fit anywhere along the spectrum from sales to engineering. This made Tim great to work with. He could manage customer expectations and changing needs allowing me to focus on what needed to be done."
  },
  {
    name: "Steph Gray",
    image: "https://via.placeholder.com/150",
    testimonial: "I’ve been a customer of Bytemark and have known Tim through his work there and events I’ve organised that he’s supported over five years or more. He’s the friendly, approachable face of what can be quite a daunting world to folks like me from outside the natural world of Linux hosting and sysadminry. I’ve always felt Tim was happy to chat to me and he’s always been full of good ideas both technically in terms of wider business/marketing."
  }
];

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
