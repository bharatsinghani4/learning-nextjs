import { notFound } from "next/navigation";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>
        Review {reviewId} of product {productId}
      </h1>
    </>
  );
};

export default ProductReview;
