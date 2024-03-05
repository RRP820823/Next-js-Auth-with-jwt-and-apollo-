import { useQuery, useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
const GET_TRACK = gql(`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`)

/**
 * Mutation to increment a track's number of views
 */

const INCREMENT_TRACK_VIEWS = gql(`
  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`)

export default function SingleTrack() {
  const { query } = useRouter()
  const { trackId } = query
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  })

  const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
    variables: { incrementTrackViewsId: trackId },
    // to observe what the mutation response returns
    onCompleted: (data) => {
      console.log(data)
    },
  })

  useEffect(() => {
    incrementTrackViews()
  }, [])

  if (data) {
    var { title, thumbnail, author, length, modulesCount, id, numberOfViews } =
      data?.track
  }
  if (loading) {
    return <h1>...loading</h1>
  }
  if (!trackId) {
    // Handle the case where trackId is not available
    return <div>No trackId provided</div>
  }
  // console.log("trackid", trackId)

  if (error) {
    console.error("GraphQL Query Error", error)
  }

  return (
    <div>
      {trackId && <h1>{title}</h1>}
      <h1>Author </h1> : {author.name}
      <button>
        <h1>{numberOfViews}</h1>
      </button>
    </div>
  )
}
