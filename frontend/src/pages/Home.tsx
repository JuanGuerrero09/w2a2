import React, { useState } from "react";
import HomeStyles from '../styles/Home.module.css'
import { useUser } from "../hooks/useUser";

export default function Home() {
  const {user} = useUser()
  return (
    <h1>Hello <strong>{user?.username}</strong></h1>
  )
}
