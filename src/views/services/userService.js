import config from "../../config";
import requestManager from "./requestManager";

export default class ManagerService {
    static async login(data) {
        const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
            `${config.domain}/api/users/login`,
            data
        )
        return response;
    }
}