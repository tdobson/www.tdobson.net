import React from "react";
import { Group } from "@mantine/core";
import { NavItems } from "../NavItems/NavItems";

export function HeaderSimple() {
  return (
    <Group justify="space-between" style={{ flex: 1 }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Tim Dobson</div>
      <Group ml="xl" gap={0} visibleFrom="sm">
        <NavItems />
      </Group>
    </Group>
  );
}
