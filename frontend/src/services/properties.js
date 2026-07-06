import api from './api.js'

export async function fetchProperties() {
  const res = await api.get('/properties/')
  return res.data
}

export async function fetchPropertyById(id) {
  const res = await api.get(`/properties/${id}`)
  return res.data
}

export async function createProperty(payload) {
  const res = await api.post('/properties', payload)
  return res.data
}

export async function updateProperty(id, payload) {
  const res = await api.put(`/properties/${id}`, payload)
  return res.data
}

export async function deleteProperty(id) {
  const res = await api.delete(`/properties/${id}`)
  return res.data
}

