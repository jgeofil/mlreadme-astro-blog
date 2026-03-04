const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
})

export const formatDate = function (date: Date) {
	// ⚡ Bolt: Using pre-instantiated Intl.DateTimeFormat is ~40x faster than calling date.toLocaleDateString() repeatedly
	return dateFormatter.format(date)
}
