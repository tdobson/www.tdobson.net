import { Timeline, Text, ThemeIcon, Avatar } from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';

export function TimDobsonTimeline() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Timeline active={2} lineWidth={6} bulletSize={40}>
        <Timeline.Item
          title="Junior Javascript Developer at XEBIT LIMITED (March 2022 - Present)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">I write Javascript integrating with Google Sheets and WordPress to help businesses automate their processes.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Chair of The Climbing Clan (November 2017 - Present)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Founded a climbing group and developed software products to support club operations.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Chair of The Caving Crew (January 2020 - Present)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Founded a caving group with a very similar setup and structure to the Climbing Clan.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Technical Sales Consultant at Migrating Dragons (April 2018 - March 2022)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Supported technology companies in building and executing sales strategies.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Customer Success Manager at Brightbox (October 2018 - October 2019)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Helped developers test our platform and gather feedback.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="User Research Specialist at Guardian Angel (February 2019 - July 2019)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Conducted user research to improve a free tool for families following the death of a loved one.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Senior Account Manager at Formisimo (July 2017 - April 2018)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Onboarded enterprise customers onto our SaaS platform.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Head of Sales & Account Management at Bytemark Hosting (November 2010 - September 2016)"
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">Managed customer relationships and sales, leading to significant revenue growth.</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
