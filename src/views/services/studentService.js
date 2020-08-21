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

}