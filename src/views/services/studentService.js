import config from "../../config";
import requestManager from "./requestManager";

export default class StudentService {

  static async getListStudent(params) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/students/all`,
      {},
      params
    )
    return response;
  }

  static async getStudentByUsername(username) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/students/get/${username}`,
      {}
    )
    return response;
  }

  static async createStudent(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/api/students/create`,
      data
    )
    return response;
  }

  static async updateStudent(username, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/api/students/update/${username}`,
      data
    )
    return response;
  }

  static async banStudent(username) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/api/students/${username}`,
      {}
    )
    return response;
  }

}