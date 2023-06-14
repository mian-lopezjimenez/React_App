import { ProductCard as ProductCardHOC } from "./ProductCard";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductButtons from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductImage, ProductTitle, ProductButtons };

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
