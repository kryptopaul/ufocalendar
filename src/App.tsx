import { MantineProvider, Text, Button, Title, Grid, Container} from '@mantine/core';
import { BadgeCard } from './Card';
import { HeaderSimple } from './Header';
import { Upcoming } from './Upcoming';
import { Featured } from './Featured';
import { Hero } from './Hero';

export default function App() {
  return (
    <>
    <HeaderSimple links={[{link: '#', label: 'Home'}, {link: '#', label: 'About'}, {link: '#', label: 'Contact'}]} />
      <Hero />
    <Container size={'xl'}>

      <Title order={2} style={{marginBottom: '20px'}}>Featured mints</Title>

      <Grid>
          <Grid.Col span={6}>
            <Featured {...{title: "y00ts", description: "y00ts is a revolutionary NFT collection. Minting in a week!", image: "https://i0.wp.com/mpost.io/wp-content/uploads/y00ts.jpg", action: {label: "Learn more", link: "https://example.com"}}} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Featured {...{title: "Lost Realms", description: "Mysterious team behind a degen project.", image: "https://i.imgur.com/TVCkmPX.png", action: {label: "Learn more", link: "https://example.com"}}} />
        </Grid.Col>
      </Grid>

      <Title order={2} style={{marginBottom: '20px', marginTop: '20px'}}>Upcoming mints</Title>

      <Upcoming />

      <Title order={2} style={{marginBottom: '20px', marginTop: '20px'}}>Past mints</Title>

    </Container>
    </>
  );
}