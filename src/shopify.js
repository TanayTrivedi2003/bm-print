const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_TOKEN; // 👈 SAME NAME
const apiVersion = "2024-01";

export async function shopifyFetch(query, variables = {}) {
  const response = await fetch(
    `https://${domain}/api/${apiVersion}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  return response.json();
}
