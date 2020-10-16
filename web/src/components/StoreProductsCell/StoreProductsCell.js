export const QUERY = gql`
  query PRODUCTS_PAGINATED {
    simpleProducts {
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
