import {Timeline, Text, Group, ThemeIcon, Avatar, Title, Space} from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';

export function TimDobsonTimeline() {
  return (
      <>
          <div style={{ textAlign: 'center' }} className="title-spacing">
              <Title order={2}>My Experience</Title>
              <Space />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Group>

      <Timeline active={1} lineWidth={6} bulletSize={60}>
        <Timeline.Item
          title="Junior Javascript Developer at XEBIT LIMITED"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(March 2022 - Present)</Text>
          <Text c="dimmed" size="sm">I write Javascript integrating with Google Sheets and WordPress to help businesses automate their processes.</Text>
        </Timeline.Item>



        <Timeline.Item
          title="Chair of The Caving Crew"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(January 2020 - Present)</Text>
          <Text c="dimmed" size="sm">Founded a caving group with a very similar setup and structure to the Climbing Clan.</Text>
        </Timeline.Item>

          <Timeline.Item
              title="Chair of The Climbing Clan"
              bullet={
                  <Avatar
                      size={44}
                      radius="xl"
                      src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                  />
              }
          >
              <Text c="dimmed" size="sm">(November 2017 - September 2024)</Text>
              <Text c="dimmed" size="sm">Founded a climbing group, developed software products to support club operations and grew it to 200+ members.</Text>
          </Timeline.Item>

        <Timeline.Item
          title="Technical Sales Consultant at Migrating Dragons"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(April 2018 - March 2022)</Text>
          <Text c="dimmed" size="sm">Supported technology companies in building and executing sales strategies.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Customer Success Manager at Brightbox"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(October 2018 - October 2019)</Text>
          <Text c="dimmed" size="sm">Helped developers test our platform and gather feedback.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="User Research Specialist at Guardian Angel"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(February 2019 - July 2019)</Text>
          <Text c="dimmed" size="sm">Conducted user research to improve a free tool for families following the death of a loved one.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Senior Account Manager at Formisimo"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(July 2017 - April 2018)</Text>
          <Text c="dimmed" size="sm">Onboarded enterprise customers onto our SaaS platform.</Text>
        </Timeline.Item>

        <Timeline.Item
          title="Head of Sales & Account Management at Bytemark Hosting"
          bullet={
            <Avatar
              size={44}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text c="dimmed" size="sm">(November 2010 - September 2016)</Text>
          <Text c="dimmed" size="sm">Managed customer relationships and sales, leading to significant revenue growth.</Text>
        </Timeline.Item>
      </Timeline>
        </Group>
    </div>
      </>
  );
}
