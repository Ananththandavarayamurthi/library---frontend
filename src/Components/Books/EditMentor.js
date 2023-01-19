import React, { useMemo, useState } from "react";
import { Container, Input, Spacer, Table } from "@nextui-org/react";

import { columns, rows } from "./data";

const EditMentors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = useMemo(() => 
  {
    if (!searchTerm) return rows;

    if (rows.length > 0) {
      const attributes = Object.keys(rows[0]);

      const list = [];

      for (const current of rows) {
        for (const attribute of attributes) {
          if (attribute === "key") {
            continue;
          }
          const value = current[attribute];
          if (value && value.toLowerCase() === searchTerm.toLowerCase()) {
            const found = rows.find((row) => row.key === current.key);
            if (found) {
              list.push(found);
            }
          }
        }
      }
      return list;
    }

    return [];
  }, [searchTerm]);

  return (
    <Container>
      <Spacer y={4} />
      <Input
        size="lg"
        bordered
        clearable
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Spacer y={2} />
      <Table>
        <Table.Header>
          {columns.map((column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          ))}
        </Table.Header>
        <Table.Body>
          {filteredRows.map((row) => (
            <Table.Row key={row.key}>
              <Table.Cell>{row.firstName + " " + row.lastName}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{row.age}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default EditMentors;