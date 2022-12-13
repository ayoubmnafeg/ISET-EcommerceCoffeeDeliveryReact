import { useMemo } from 'react'
import menu from '../menu'


export function useDeliveryFee(
) {
  const deliveryFee = 3.5
  const price = useMemo(() => {
    return menu?.reduce(
      (acc, item, index) => {
        acc.subTotal += item.amount * item.quantity
        if (index === menu.length - 1) acc.total = acc.subTotal + deliveryFee
        return acc
      },
      { subTotal: 0, total: 0 },
    )
  }, [])
  return price
}
