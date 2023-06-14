import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ image = "" }: { image?: string }) => {
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
    <img className={styles.productImg} src={imgToShow} alt="Product Image" />
  );
};

export default ProductImage;
