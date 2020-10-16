import { db } from 'src/lib/db'

export const simpleProducts = () => {
  return {
    simpleProducts: db.simpleProduct.findMany({ take: 25, }),
    count: db.simpleProduct.count(),
  }
}

export const simpleProduct = ({ sku }) => {
  return db.simpleProduct.findOne({
    where: { sku },
  })
}
