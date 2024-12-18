import React from 'react';
import { Box, Table, Tbody, Th, Td } from '@chakra-ui/react';

const DisplayMessages = ({ messages }) => (
  <Box p={3} mb={3} borderWidth="1px" borderRadius="lg">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Origin</Table.ColumnHeader>
          <Table.ColumnHeader>Destination</Table.ColumnHeader>
          <Table.ColumnHeader>Timestamp</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {messages.map((message, index) => (
          <Table.Row key={index}>
            <Table.Cell>{message.name}</Table.Cell>
            <Table.Cell>{message.origin}</Table.Cell>
            <Table.Cell>{message.destination}</Table.Cell>
            <Table.Cell>{message.timestamp}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell />
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  </Box>
);

export default DisplayMessages;
