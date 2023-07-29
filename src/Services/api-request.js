/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable func-names */

import { AppUtils } from "./app-utils"
import {BaseAxiosInstance} from "./axios"
/**
 * Request Wrapper with default success/error actions
 */
export const ApiRequest = async function (options) {
  const onSuccess = function (response) {
    if (response && response.success) {
      return Promise.resolve(response)
    } else {
      return Promise.resolve(response)
    }
  }

  const onError = function (error) {
    return Promise.reject(error)
  }

  let isConnectedToInternet = await AppUtils.isConnectedToInternet()
  

  if (isConnectedToInternet) {
    try {
      let response = ""

      response = await BaseAxiosInstance(options)

      return onSuccess(response)
    } catch (error) {
      return onError(error)
    }
  } else {
    console.log("no internet")
  }
}
