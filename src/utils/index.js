// Config
import { API_URL } from '../config'
// Libs
import axios from 'axios'
import { get, merge } from 'lodash'

/**
 * Make a request API
 * 
 * @param {Object} request - request options
 * @return {Promise | Error} - request response
 */
export async function makeRequest(request = {}) {
  // default options
  const defaultOptions = {
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
    timeout: 15000
  }

  // request options
  const currentOptions = merge(defaultOptions, request)

  // check Url
  if (!get(currentOptions, 'url', false)) {
    throw new Error('You must indicate an URL')
  }

  // Get results
  const { status = 'ok', data = [] } = await axios(currentOptions)

  if (status !== 'ok') {
    throw new Error('Request error')  
  }

  return data
}

