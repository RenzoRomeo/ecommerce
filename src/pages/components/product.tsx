import { Box, Badge } from "@chakra-ui/react";
import { Img as Image } from "@chakra-ui/react";

import HoverBox from "./hover-box";

import type { ProductType } from "../api/products";

interface Props {
  product: ProductType;
}

const Product = (props: Props) => {
  const { product } = props;

  return (
    <HoverBox maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.title} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Box>{product.price}</Box>
      </Box>
    </HoverBox>
  );
};
export default Product;
