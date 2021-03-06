import fetch from 'node-fetch'
import type Indices from './types/Indices'

export default class Jpx {
	private static url = {
		base: 'https://www.jpx.co.jp/market/indices/'
	}

	static daysAgo(day = 0) {
		if (day > 5) {
			throw new Error('The maximum number of days to go back is 5 days.')
		}
		return fetch(
			`${this.url.base}indices_stock_price${day ? `.${day}` : ''}.txt`
		).then(r => r.json()) as Promise<Indices>
	}

	static unformat(formattedNumber: string) {
		return formattedNumber.replace(/,/g, '')
	}
}
