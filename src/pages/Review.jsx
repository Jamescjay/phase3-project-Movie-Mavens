import { Card, CardHeader, CardBody, Heading,Stack, Box, Text, StackDivider, Image } from "@chakra-ui/react";


function Review() {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Zack Snyder's Justice League</Heading>
        </CardHeader>
        <Image
          objectFit="cover"
          src="https://images.thedirect.com/media/article_full/newpos_QB7hEyO.jpg"
          h={500}
        />
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">John Doe</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Movie Review
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Ratings
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Date Posted
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Review