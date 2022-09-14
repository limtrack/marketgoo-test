// Constants
import { API_URL } from '../constants'
// Libs
import axios from 'axios'
import { get, merge } from 'lodash'

/**
 * Agrupa clases CSS para montar los atributos "classNames"
 */
export function setClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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

/**
 * Transform string to number
 * 
 * @param {Number | String} value - value to transform
 * @return {Number}
 */
export function stringToNumber(value) {
  if (
    typeof value !== 'string' ||
    (typeof value === 'string' && value === '')
  ) {
    return value
  }

  const parseNumber = Number.parseFloat(value.replace(/,/gi, '.'))

  return Number.isNaN(parseNumber) ? value : parseNumber
}

