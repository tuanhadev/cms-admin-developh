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

}