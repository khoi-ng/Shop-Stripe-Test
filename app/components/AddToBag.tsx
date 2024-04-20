'use client';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

const AddToBag = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
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
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;
