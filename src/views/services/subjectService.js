import config from "../../config";
import requestManager from "./requestManager";

export default class SubjectService {

  static async getListSubject(params) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/subjects/all`,
      {},
      params
    )
    return response;
  }

  static async getSubjectById(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/api/subjects/get/${id}`,
      {}
    )
    return response;
  }

  static async createSubject(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/api/subjects/create`,
      data
    )
    return response;
  }

  static async updateSubject(id, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/api/subjects/update/${id}`,
      data
    )
    return response;
  }

  static async deleteSubject(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/api/subjects/${id}`,
      {}
    )
    return response;
  }

}