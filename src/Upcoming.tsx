import { SimpleGrid } from '@mantine/core';
import { BadgeCard } from './Card';

export function Upcoming(){
    return(
        <SimpleGrid breakpoints={
          [
              {maxWidth: 600, cols: 1}
          ]
      } cols={3}>
   

      <BadgeCard {...{image: 'https://pbs.twimg.com/profile_banners/1517205858949685248/1664700472/1500x500', title: "Coliseum", website: 'https://www.premint.xyz/coliseum/', discord: 'https://discord.gg/jCd8AU2QfX' ,chain: 'Ethereum', description: 'Coliseum is a collection of 310 free to mint gladiators on the ETH blockchain. Participate in the interactive, ever changing and based on reality lore on our Twitter to earn your right of passage to join your gladiator brothers in the arena.  310 supply. Minted in batches of 80.', badges: [{emoji: '🐒', label: 'monke'}]}} />


      
      <BadgeCard {...{image: 'https://pbs.twimg.com/profile_banners/1455737398982332416/1663538750/1500x500', title: "Nephalem", website: "https://www.premint.xyz/nephalem/", discord: "https://discord.gg/nftz", chain: 'Ethereum', description: 'A new era... A new entity... A new uprising...  The Holy Nephalems represent light and decay. Innocence and impurity. Love and fear. As offspring of angels and demons, they have forever altered the stability between Heaven and Hell.', badges: [{emoji: '🐒', label: 'monke'}]}} />

      
      <BadgeCard {...{image: 'https://i.imgur.com/WnIAfgJ.png', title: "AFAR", chain: 'Ethereum', website: "https://www.playafar.com/", discord: "https://www.discord.gg/playafar", description: 'Welcome AFARIANS to A Far Away Realm (AFAR), a metaverse of fun and adventures, where you will play and make friends as you discover the AFAR Universe. AFAR takes place in a distant galaxy, where a group of courageous heroes competes in a galactic tournament that rewards the winning AFARian.', badges: [{emoji: '🐒', label: 'monke'}]}} />
      

    </SimpleGrid>
    )
}