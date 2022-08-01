import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import { SimpleGrid } from '@chakra-ui/react';

export const TeamMemberGrid = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
    </SimpleGrid>
  );
};
