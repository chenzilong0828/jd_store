import axios from 'axios';
export const post = (url, data = {}) => {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
			baseURL: 'https://www.fastmock.site/mock/a00c49722c670eba88e12c2ffd824bc0/api',
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
