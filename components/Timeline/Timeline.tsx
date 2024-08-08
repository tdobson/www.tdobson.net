import { Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';

export function TimDobsonTimeline() {
  return (
    <Timeline active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="The Climbing Clan and The Caving Crew">
        <Text c="dimmed" size="sm">Currently the chair of The Climbing Clan and The Caving Crew, BMC and BCA affiliated climbing and caving clubs that I founded.</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Software Development">
        <Text c="dimmed" size="sm">Developed several software products to assist with club operations, most notably neoClan, a second-generation membership check-in system.</Text>
      </Timeline.Item>

      <Timeline.Item title="Current Learning" bullet={<IconGitPullRequest size={12} />}>
        <Text c="dimmed" size="sm">Currently teaching myself React with the Mantine framework and Next.js, as well as exploring react-query and advanced git workflows.</Text>
      </Timeline.Item>

      <Timeline.Item title="Freelance Opportunities" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Keen on opportunities for freelance work and development. If you have an exciting project, I'd love to collaborate!</Text>
      </Timeline.Item>

      <Timeline.Item title="Expertise" bullet={<ThemeIcon size={22} radius="xl"><IconGitBranch size={12} /></ThemeIcon>}>
        <Text c="dimmed" size="sm">Ask me about Linux administration, rock climbing, and caving.</Text>
      </Timeline.Item>

      <Timeline.Item title="Personal" bullet={<ThemeIcon size={22} radius="xl"><IconGitBranch size={12} /></ThemeIcon>}>
        <Text c="dimmed" size="sm">Fun fact: I have a wonderful son named James.</Text>
      </Timeline.Item>
    </Timeline>
  );
}
