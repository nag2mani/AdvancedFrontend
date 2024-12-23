import { Card, Text } from "@mantine/core";

type DisplayCardProps = {
  label: string;
  amount: number;
  color: string;
};

const DisplayCard = ({ label, amount, color }: DisplayCardProps) => {
  return (
    <Card
      shadow="sm"
      p="xl"
      mb={25}
      style={{ height: "10  0px", textAlign: "center" }}
    >
      <Text weight={500} size={30} mt="md">
        {label}
      </Text>
      <Text mt="xs" size={30} color={color} weight={500}>
        ${amount.toLocaleString("en-US")}
      </Text>
    </Card>
  );
};

export default DisplayCard;
