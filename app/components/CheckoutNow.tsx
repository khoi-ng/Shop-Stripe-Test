'use client';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';

const CheckoutNow = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    currency,
    description,
    image: urlFor(image).url(),
    name,
    price,
    price_id,
  };

  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
