export interface Book {
	id: string
	title: string
	author: string
	price: number
	stock: number
}

export interface CartItem extends Book {
	quantity: number
}

export interface SearchFilters {
	query: string
	filterBy?: 'title' | 'author' | 'all'
}

export type SortOption = 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc' | 'stock-asc'

//слайс книг
export interface BookState {
	books: Book[]
	filteredBooks: Book[]
	searchFilters: SearchFilters
	sortBy: SortOption
}

//слайс корзины
export interface CartState {
	items: CartItem[]
	totalAmount: number
	totalItems: number
}

export interface StockUpdate {
	bookId: string
	newStock: number
}

export const MOCK_BOOKS: Book[] = [
	{
		id: '1',
		title: 'Война и мир',
		author: 'Лев Толстой',
		price: 500,
		stock: 10,
	},
	{
		id: '2',
		title: 'Преступление и наказание',
		author: 'Федор Достоевский',
		price: 450,
		stock: 5,
	},
	{
		id: '3',
		title: 'Мастер и Маргарита',
		author: 'Михаил Булгаков',
		price: 600,
		stock: 0,
	},
	{
		id: '4',
		title: 'Евгений Онегин',
		author: 'Александр Пушкин',
		price: 300,
		stock: 8,
	},
	{
		id: '5',
		title: '1984',
		author: 'Джордж Оруэлл',
		price: 550,
		stock: 7,
	},
]
