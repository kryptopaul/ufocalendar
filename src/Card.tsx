import { Card, Image, Text, Group, Badge, Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  chain: string;
  description: string;
  website: string;
  discord: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function BadgeCard({ image, title, description, chain, website, discord}: BadgeCardProps) {
  const { classes } = useStyles();


  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
            <div style={{display: 'block'}}>
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Text size="md" weight={250}>
            Mint date: 25.09.2022
          </Text>
          </div>
          <Badge size="sm" color={'blue'}>{chain}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>


      <Group mt="xs">
        <Button component='a' href={website} radius="md" style={{ flex: 1 }}>
          Website
        </Button>
        <Button component='a' href={discord} radius="md" color={'violet'} style={{ flex: 1}}>
          Discord
        </Button>

      </Group>
    </Card>
  );
}