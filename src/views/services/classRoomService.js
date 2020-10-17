import config from "../../config";
import requestManager from "./requestManager";

export default class ClassRoomService {

  static async getListClassRoom(params) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/classrooms/all`,
      {},
      params
    )
    return response;
  }

  static async getClassRoomById(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/classrooms/get/${id}`,
      {}
    )
    return response;
  }

  static async createClassRoom(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/api/classrooms/create`,
      data
    )
    return response;
  }

  static async updateClassRoom(id, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/api/classrooms/update/${id}`,
      data
    )
    return response;
  }

  static async deleteClassRoom(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/api/classrooms/${id}`,
      {}
    )
    return response;
  }

}