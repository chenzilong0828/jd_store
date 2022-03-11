import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://www.fastmock.site/mock/a00c49722c670eba88e12c2ffd824bc0/api',
	timeout: 10000
})
export const get = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		instance.get(url, { params }).then((response) => {
			resolve(response.data)
		}, err => {
			reject(err)
		})
	})
}
export const post = (url, data = {}) => {
	return new Promise((resolve, reject) => {
		instance.post(url, data, {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}).then((response) => {
			resolve(response.data)
		}, err => {
			reject(err)
		})
	})
}
