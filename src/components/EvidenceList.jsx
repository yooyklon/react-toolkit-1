import React from "react";

import EvidenceItem from "./EvidenceItem";

import { useSelector } from "react-redux";

export default function EvidenceList() {
  const list = useSelector((state) => state.evidence.currentList);

  if (!list.length) return null;

  return (
    <ul className="evidence-list">
      {list.map((el, i) => (
        <EvidenceItem value={el} key={i} />
      ))}
    </ul>
  );
}
