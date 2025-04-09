import './App.css'

import { FilterableProductTable } from './basic/ProductTable'
import { ProductTableData } from './basic/ProductTable.data'

function App() {

  return (
    <>
      <FilterableProductTable products={ProductTableData} />
    </>
  )
}

export default App
