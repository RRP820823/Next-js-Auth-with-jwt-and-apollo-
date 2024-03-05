import { RESTDataSource } from "@apollo/datasource-rest"
import { TrackModel, AuthorModel, ModuleModel } from "../models"

import { GetUserBlyId } from "./utils"
export class TrackAPI extends RESTDataSource {
  baseURL = "https://strapi.training.brainvire.net/api"

  getUserBuID(id: any) {
    const myHeaders = new Headers()
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzA5MTIxMDMyLCJleHAiOjE3MTE3MTMwMzJ9.9sH3Kuz-mQxDJNOWlDEtOlN1e5jY4T9VKpcDBpsilA0"
    )

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }

    try {
      const response = fetch(
        `https://strapi.training.brainvire.net/api/basic-details?populate=*&filters[users_permissions_user][id][$eq]=${id}`,
        requestOptions
      ).then((res) => res.json())
      return response
    } catch (error) {
      console.error(error)
    }
  }
  // getTracksForHome() {
  //   return this.get<TrackModel[]>("tracks")
  // }

  // getAuthor(authorId: string) {
  //   return this.get<AuthorModel>(`author/${authorId}`)
  // }

  // getTrack(trackId: string) {
  //   return this.get<TrackModel>(`track/${trackId}`)
  // }

  // getTrackModules(trackId: string) {
  //   return this.get<ModuleModel[]>(`track/${trackId}/modules`)
  // }

  // incrementTrackViews(trackId: string) {
  //   return this.patch<TrackModel>(`track/${trackId}/numberOfViews`)
  // }
}
