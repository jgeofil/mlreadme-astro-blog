export const formatDate = function (date) {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

