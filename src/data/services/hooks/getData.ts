import { DocumentNode, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";

export const prepareQuery = (query: DocumentNode) => {
  const { refetch: doQuery } = useQuery(query, {
    skip: true
  });
    
  return { doQuery };
};
