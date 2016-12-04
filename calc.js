'use strict'

const R = require('ramda')

const filteredData = (data, department) => {
	const isit = data => data.department === department
	return R.filter(isit, data)
}
const net_sales = data => Number(data.net_sales)
const its_net_sales = data => R.map(net_sales, data)
const add = (a, b) => a + b
const total_net_sales = data => Number(R.reduce(add, 0, data).toFixed(2))

module.exports = R.pipe(filteredData, its_net_sales, total_net_sales)