"use client";
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function Home() {

  const options = ['Off', 'On'];
  const [value, setValue] = useState(options[0]);

  return (
    <>
      Rick & Morty API
    </>
  );
}