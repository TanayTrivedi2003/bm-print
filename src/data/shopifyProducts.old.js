import { shopifyFetch } from "../shopify";

const COLLECTION_QUERY = `
query ProductsByCollection($handle: String!) {
  collection(handle: $handle) {
    products(first: 20) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export async function getProductsByCollection(handle) {
  const res = await shopifyFetch(COLLECTION_QUERY, { handle });

  if (!res.data.collection) return [];

  return res.data.collection.products.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    description: node.description,
    price: node.variants.edges[0].node.price.amount,
    variantId: node.variants.edges[0].node.id,
    image: node.images.edges[0]?.node.url,
  }));
}
