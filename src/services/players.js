// Utils
import { makeRequest } from '../utils'

/**
 * Get many players
 * 
 * @return {Array} - players
 */
export async function getManyPlayers() {
  const result = await makeRequest({
    method: 'get',
    url: 'players'
  })

  return result
}

/**
 * Create one player
 * 
 * @param {Object} - player data to create
 * @return {Object} - player created
 */
 export async function createPlayer(data = {}) {
  const result = await makeRequest({
    method: 'post',
    url: 'players',
    data
  })

  return result
}

/**
 * Delete one player by UID
 * 
 * @param {Number} - player UID
 */
 export async function deletePlayerById(id = null) {
  const result = await makeRequest({
    method: 'delete',
    url: `players/${id}`,
    data
  })

  return result
}