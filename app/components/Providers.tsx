'use client';

import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      currency='USD'
      successUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_DOMAIN}`}
      billingAddressCollection={false}
      shouldPersist={true}
      loading={<p aria-live='polite'>Loading redux-persist...</p>}
      language='en-US'
    >
      {children}
    </USCProvider>
  );
}
