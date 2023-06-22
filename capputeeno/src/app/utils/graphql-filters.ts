import { FilterOrder } from "../types/filterOrder";
import { FilterType } from "../types/filterType";

const getFilterType = (type: FilterType) => {
    if(type === FilterType.MUGS) return 'mugs'
    if(type === FilterType["T-SHIRTS"]) return 't-shirts'
    return ''
}

const getFilterOrder = (order: FilterOrder) => {
    if(order === FilterOrder.BEST_SELLERS) return { field: 'sales', order: 'DSC'}
    if(order === FilterOrder.BIGGEST_PRICE) return { field: 'price_in_cents', order: 'ASC'}
    if(order === FilterOrder.LOWEST_PRICE) return { field: 'price_in_cents', order: 'DSC'}
    return { field: 'created_at', order: 'ASC'}
}

export function getQuery(type: FilterType, order: FilterOrder, page: number) {
    if(type === FilterType.ALL && order === FilterOrder.NEWS) {
        return `query {
            allProducts(sortField: "sales", sortOrder: "DSC", perPage: 14, page: ${page}) {
              id
              name
              price_in_cents
              image_url
            }
          }
        `
    }

    const filterOrder = getFilterOrder(order)
    const filterType = getFilterType(type)

    return `query {
        allProducts(sortField: "${filterOrder.field}", sortOrder: "${filterOrder.order}", ${filterType ? ` filter: { category : "${filterType}" }` : ''} , perPage: 14, page:${page}) {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
}