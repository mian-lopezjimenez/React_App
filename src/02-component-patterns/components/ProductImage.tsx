import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  image?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, style, image = "" }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = "";

  if (image) {
    imgToShow = image;
  }

  if (product.image) {
    imgToShow = product.image;
  }

  if (!image && !product.image) {
    imgToShow = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product Image"
    />
  );
};

export default ProductImage;
