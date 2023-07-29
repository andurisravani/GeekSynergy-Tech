import { ApiMethods, ApiPaths } from "./api-constants";
import { ApiRequest } from "./api-request";



function GetResult(userProfile, onSuccess, onFailure) {
  ApiRequest({
    url: ApiPaths.GET_MOVIES,
    method: ApiMethods.POST,
    data: userProfile,
  }).then(
    response => {
      onSuccess(response.data);
    },
    error => {
      onFailure(error);
    },
  );
}

export const AuthServices = {
    GetResult,
}