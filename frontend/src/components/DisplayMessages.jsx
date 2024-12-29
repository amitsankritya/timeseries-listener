import React from 'react';
import { Box, Table } from '@chakra-ui/react';

const DisplayMessages = ({ messages }) => (

  <Box p={3} mb={3} mx="auto">
    <Table.ScrollArea borderWidth="1px" rounded="md" maxHeight="600px">
      <Table.Root size="md" stickyHeader>
        <Table.Header>
          <Table.Row textAlign="center" backgroundColor="green.800">
            <Table.ColumnHeader textAlign="center" color={'green.400'} fontWeight={'bold'} fontSize={'md'}>Name</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color={'green.400'} fontWeight={'bold'} fontSize={'md'}>Origin</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" color={'green.400'} fontWeight={'bold'} fontSize={'md'}>Destination</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {messages.map((message, index) => (
            <Table.Row key={index} textAlign="center" backgroundColor="green.800">
              <Table.Cell textAlign="center" color={'white'} fontSize={'md'}>{message.name}</Table.Cell>
              <Table.Cell textAlign="center" color={'white'} fontSize={'md'}>{message.origin}</Table.Cell>
              <Table.Cell textAlign="center" color={'white'} fontSize={'md'}>{message.destination}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer textAlign="center">
          
        </Table.Footer>
      </Table.Root>
    </Table.ScrollArea>
    
  </Box>
);

export default DisplayMessages;
