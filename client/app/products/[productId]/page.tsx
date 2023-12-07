import type { Metadata } from 'next';

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`)
    }, 1000)
  })
  return {
    title: `Product ${title}`,
  }
};

const Page = ({ params }: Props) => {
  return (
    <p>Product {params.productId} page</p>
  );
};

export default Page;