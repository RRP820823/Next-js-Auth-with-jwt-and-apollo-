import React from "react"
import { useQuery, gql, useMutation } from "@apollo/client"
import Link from "next/link"
// import { gql } from "../__generated__"
// import { useQuery } from "@apollo/client"
const GetUsers = gql`
  query getTracks {
    tracksForHome {
      id
      title
    }
  }
`

export default function Users() {
  const { loading, error, data } = useQuery(GetUsers)
  const [userID, setuserID] = React.useState("")

  console.log("userID", userID)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  function handelClick(u) {
    setuserID(u.id)
  }
  return (
    <div>
      <ul>
        {data.tracksForHome.map((u: any) => (
          <Link key={u.id} href={`/${u.id}`}>
            <li key={u.id}>
              {u.title}
              <button onClick={(u) => handelClick(u)}> get id </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
