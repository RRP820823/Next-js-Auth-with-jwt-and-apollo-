import React from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

import Link from "next/link"
export default function Welcomepage() {
  let router = useRouter()
  function handelSignout() {
    Cookies.remove("token")
    console.log("clicked")

    router.push("/Login")
  }
  return (
    <div>
      <Link href={"/about"}>ABOUT</Link>
      <h1> Welcomepage user</h1>
      <button onClick={handelSignout}>Signout</button>
    </div>
  )
}
