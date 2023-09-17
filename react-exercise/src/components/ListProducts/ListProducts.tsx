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
import { NavBar } from "../NavBar/NavBar";
import { useAuth } from "../context/AuthContext";
import jwtDecode from "jwt-decode";

interface JwtPayload {
  payLoad: Record<string, string>;
}

export const ListProducts = () => {
  const auth = useAuth();
  const data: JwtPayload = jwtDecode(auth?.token!);
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
      <NavBar>
        <button>Welcome, {data?.payLoad!.name}</button>
      </NavBar>
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
