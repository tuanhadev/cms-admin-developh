import config from "../../config";
import requestManager from "./requestManager";

export default class TeacherService {

  static async getListTeacher(params) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/teachers/all`,
      {},
      params
    )
    return response;
  }

  static async getTeacherByUsername(username) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/teachers/get/${username}`,
      {}
    )
    return response;
  }

  static async createTeacher(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/api/teachers/create`,
      data
    )
    return response;
  }

  static async updateTeacher(username, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/api/teachers/update/${username}`,
      data
    )
    return response;
  }

  static async banTeacher(username) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/api/teachers/${username}`,
      {}
    )
    return response;
  }

}