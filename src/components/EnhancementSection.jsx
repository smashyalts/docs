import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function EnhancementSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Deploy a server in OCI"
        description="Learn how to configure a Minecraft server utilising Oracle Cloud free tier."
        to="/enhancements/anticheat"
      />
      <Card
        title="Deploy Pterodactyl"
        description="Learn how to deploy Pterodactyl control panel (and wings) using Ubuntu LTS."
        to="/guides/pterodactyl"
      />
    </Section>
  );
}