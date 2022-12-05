import React, { useRef } from "react";

import EvidenceList from "./EvidenceList";

import { useDispatch, useSelector } from "react-redux";

import { showEvidence } from "../slice/evidenceSlice";

export default function Evidence() {
  const list = useSelector((state) => state.evidence.list);

  const dispatch = useDispatch();

  const inputRef = useRef();

  function handleSubmite(event) {
    event.preventDefault();

    dispatch(showEvidence(inputRef.current.value));
  }

  return (
    <div className="evidence">
      <form className="evidence-form" onSubmit={handleSubmite}>
        <div className="input-box">
          <label className="evidence-label">Введите число фактов ниже:</label>
          <input
            ref={inputRef}
            type="number"
            className="evidence-input mb-20"
            name="number"
            min="1"
            max={list.length}
            placeholder="0"
          />
        </div>
        <button className="evidence-btn">Показать</button>
      </form>
      <EvidenceList />
    </div>
  );
}
