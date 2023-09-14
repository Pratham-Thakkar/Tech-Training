import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export const ListProducts = () => {
  const [products, setProducts] = useState<Array<Record<string, string>>>([]);

  const fetchProductDetails = useCallback(async () => {
    const productDetails = await axios.get("https://fakestoreapi.com/products");
    setProducts(productDetails.data);
  }, []);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={product.image} />
              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.category}
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Link to={"/cart"}>
                  <Button>Add to cart</Button>
                </Link>
              </CardBody>
            </Card>
          </>
        );
      })}
    </>
  );
};
