import apiUrl from '../apiConfig'
import axios from 'axios'

export const movieCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/movies',
		data: {
			movie: data,
		},
        headers: {
            Authorization: `Token token=${user.token}`,
        }
	})
}

export const movieIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/movies',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const movieShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/movies/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const movieUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/movies/' + id,
		data: {
			movie: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const movieDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/movies/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
