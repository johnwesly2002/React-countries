import React from 'react'

export default function useFilter(array = [], func) {
     const filteredData = array.filter(func)
    return filteredData;
}
