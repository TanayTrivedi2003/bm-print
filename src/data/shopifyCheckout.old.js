import { shopifyFetch } from "../shopify";

const CHECKOUT_MUTATION = `
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      webUrl
    }
  }
}
`;

export async function createCheckout(variantId) {
  const res = await shopifyFetch(CHECKOUT_MUTATION, {
    input: {
      lineItems: [
        {
          variantId,
          quantity: 1,
        },
      ],
    },
  });

  return res.data.checkoutCreate.checkout.webUrl;
}
