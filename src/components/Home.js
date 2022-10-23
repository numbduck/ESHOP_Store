import React, { useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import { SingleProduct } from './SingleProduct';
import { ecommContext } from './Context';


faker.seed(10);
export const Home = () => {
  const productsArray = [...Array(19)].map(() =>
  ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(1234, 2345, true)
  }));
  const [products] = useState(productsArray);
  const { search } = React.useContext(ecommContext)
  const [query, setQuery] = search

  return (

    <div className='productsContainer'>
      {products.filter((prod) => {
        if (query =="") {
          return (prod)
        } else if (prod.name.toLowerCase().includes(query)) {
          return (prod)
        }
      }).map((prod) => <SingleProduct props={prod} />)}
    </div>
  )
}
