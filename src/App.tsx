import { Title, Grid, Container} from '@mantine/core';

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
            <Featured {...{title: "QQL", description: "A collaborative experiment in generative art by Tyler Hobbs and Dandelion Wist Mané.", image: "https://images.squarespace-cdn.com/content/v1/5c12933f365f02733c923e4e/54e3afea-956f-47d7-a0ee-3749db510da8/qql-2.png", action: {label: "Learn more", link: "https://qql.art/"}}} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Featured {...{title: "Seven Virtues", description: "Mysterious team behind a degen project.", image: "https://i.imgur.com/kIA4BDP.png", action: {label: "Learn more", link: "https://www.niftygateway.com/collections/seven-virtues"}}} />
        </Grid.Col>
      </Grid>

      <Title order={2} style={{marginBottom: '20px', marginTop: '20px'}}>Upcoming mints</Title>

      <Upcoming />

      <Title order={2} style={{marginBottom: '20px', marginTop: '20px'}}>Past mints</Title>

    </Container>
    </>
  );
}