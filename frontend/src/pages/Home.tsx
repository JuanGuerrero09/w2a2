import React, { useState } from "react";
import HomeStyles from '../styles/Home.module.css'

export default function Home() {
  const [username, setUsername] = useState<string>();
  setUsername('Kath')
  return (
    <h1>Hello <strong>{username}</strong>{username}</h1>
  )
}
