'use strict'

const R = require('ramda')

const departmentList = data => data.map(d => d.department)

const departments = list => R.uniq(list)

module.exports = R.pipe(departmentList, departments)