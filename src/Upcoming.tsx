import { IconHeart } from '@tabler/icons';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, Grid } from '@mantine/core';
import { BadgeCard } from './Card';

export function Upcoming(){
    return(
        <Grid>
      <Grid.Col span={4}>      
      <BadgeCard {...{image: 'https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg', title: "Bored Ape Yacht Club", country: 'Ethereum', description: 'BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits.', badges: [{emoji: '🐒', label: 'monke'}]}} />
      </Grid.Col>
      <Grid.Col span={4}>      <BadgeCard {...{image: 'https://www.asiacryptotoday.com/wp-content/uploads/2022/02/DeGods.jpg', title: "DeGods", country: 'Ethereum', description: 'DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators. DeGods earn $DUST, a useless token that everyone on Solana uses.', badges: [{emoji: '🐒', label: 'monke'}]}} /></Grid.Col>
      <Grid.Col span={4}>      <BadgeCard {...{image: 'https://gmblockchain.io/wp-content/uploads/2022/02/CyberKongz-NFT-Top.png', title: "Cyberkongz", country: 'Ethereum', description: 'CyberKongz are unique and randomly generated 2D/3D NFT Social Avatars for your online experiences. Some appear normal. Some look weird. Some are just damn cool! Maybe some even look familiar!', badges: [{emoji: '🐒', label: 'monke'}]}} /></Grid.Col>
    </Grid>
    )
}