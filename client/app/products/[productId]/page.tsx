const Page = ({ params }: {
  params: {
    productId: string
  }
}) => {
  return (
    <p>Product {params.productId} page</p>
  );
};

export default Page;