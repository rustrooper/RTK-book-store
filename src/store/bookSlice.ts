import {MOCK_BOOKS, type Book} from '../types/bookStore'

const mockAPI = {
	fetchBooks: (): Promise<Book[]> => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve([...MOCK_BOOKS])
			}, 1000)
		})
	},
}

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
})
