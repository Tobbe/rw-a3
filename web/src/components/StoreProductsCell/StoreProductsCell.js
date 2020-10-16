/** @jsx jsx */
import { jsx } from 'theme-ui'

export const QUERY = gql`
  query PRODUCTS_PAGINATED {
    allProducts: simpleProducts(
      page: 1
      limit: 25
      filterSkus: null
    ) {
      simpleProducts {
        sku
        name
        short_desc
        regular_price
        images
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = () => {
  return (
    <pre>StorProductsCell</pre>
  )
}
