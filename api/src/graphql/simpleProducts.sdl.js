export const schema = gql`
  type SimpleProduct {
    sku: String!
    name: String!
    published: Int
    featured: Int
    visibility: String
    short_desc: String!
    description: String
    sale_start: DateTime
    sale_end: DateTime
    tax_status: String!
    tax_class: String!
    weight: Int
    length: Int
    width: Int
    height: Int
    sale_price: Float
    regular_price: Float!
    stock: Int!
    images: String
    ean: String
    manufacturer: String
  }

  type SimpleProductSet {
    simpleProducts: [SimpleProduct]!
    count: Int
  }

  type Query {
    simpleProducts(page: Int, limit: Int, filterSkus: [String]): SimpleProductSet
    simpleProduct(sku: String!): SimpleProduct!
  }
`
