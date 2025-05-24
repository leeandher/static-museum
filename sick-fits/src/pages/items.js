import React from "react";

import Items from "@/components/Items";
import Page from "@/components/Page";

export default function ItemsPage() {
  return (
    <Page>
      <div>
        <Items page={1} />
      </div>
    </Page>
  );
}
