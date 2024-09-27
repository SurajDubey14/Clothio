// import React from "react";
// import Addcart from "../AddCart/Addcart";
// import style from "../listing/listing.module.css";
// import { useParams } from "react-router-dom";

// const data = [
//   {
//     id: "0",
//     name: "Funky Sport",
//     price: "1200",
//     src: "s1.jpg",
//     org: "1099",
//     category: "shoes",
//   },
//   {
//     id: "1",
//     name: "Black Jordan",
//     price: "1799",
//     src: "j3.jpg",
//     org: "8999",
//     category: "jeans",
//   },
//   {
//     id: "2",
//     name: "High Ankle",
//     price: "2000",
//     src: "s3.jpg",
//     org: "4099",
//     category: "shoes",
//   },
//   {
//     id: "3",
//     name: "Chiproma Sneaker",
//     price: "1200",
//     src: "j1.jpg",
//     org: "1099",
//     category: "jeans",
//   },
//   {
//     id: "4",
//     name: "Boot",
//     price: "3500",
//     src: "j2.jpg",
//     org: "4000",
//     category: "jeans",
//   },
//   {
//     id: "5",
//     name: "Nike",
//     price: "8000",
//     src: "s6.jpg",
//     org: "9999",
//     category: "shoes",
//   },
// ];
// const Listing = () => {
//   const params = useParams();
//   console.log(params.id, "bsejfbi")
//   // Added params as a prop
//   // const Listing = () => {
//   // Filter the data based on the category
//   const filteredData = data.filter((value) => {
//     return value.link === params;
//   });

//   return (
//     <div className={style.container}>
//       <div className={style.Secitionhead}>Premium Shoes Collection</div>
//       <div className={style.container_inr}>
//         {filteredData && filteredData.map((value) => {
//           console.log(value, "val")
//           return (
//           <Addcart
//               key={value.id} // Use a unique identifier, assuming each item has an 'id'
//               Carttitle={"Add to cart"}
//               src={value.src}
//               title={value.name}
//               price={value.price}
//               org={value.org}
//             />
//           )
//         }
//         )}
//       </div>
//     </div>
//   );
// };

// export default Listing;

import React from "react";
import { useParams } from "react-router-dom";
import Addcart from "../AddCart/Addcart";
import style from "../listing/listing.module.css";

const data = [
  {
    id: "0",
    name: "Funky Sport",
    price: "1200",
    src: "s1.jpg",
    org: "1099",
    category: "shoes",
  },
  {
    id: "1",
    name: "Highlander",
    price: "1799",
    src: "j3.jpg",
    org: "8999",
    category: "jeans",
  },
  {
    id: "2",
    name: "High Ankle",
    price: "2000",
    src: "s3.jpg",
    org: "4099",
    category: "shoes",
  },
  {
    id: "3",
    name: "Chiproma Sneaker",
    price: "1200",
    src: "j1.jpg",
    org: "1099",
    category: "jeans",
  },
  {
    id: "4",
    name: "Boot",
    price: "3500",
    src: "j2.jpg",
    org: "4000",
    category: "jeans",
  },
  {
    id: "5",
    name: "Nike",
    price: "8000",
    src: "s6.jpg",
    org: "9999",
    category: "shoes",
  },
];

const Listing = () => {
  // Get the `id` parameter from the URL using the `useParams` hook
  const { id } = useParams();

  // Filter the data based on the category or `id` value passed in the URL path
  const filteredData = data.filter((item) => item.category === id);

  return (
    <div className={style.container}>
      <div className={style.Secitionhead}>
        Premium {id?.charAt(0).toUpperCase() + id?.slice(1)} Collection
      </div>
      <div className={style.container_inr}>
        {filteredData.length > 0 ? (
          filteredData.map((value) => (
            <Addcart
              key={value.id}
              Carttitle={"Add to cart"}
              src={`/${value.src}`}
              title={value.name}
              price={value.price}
              org={value.org}
            />
          ))
        ) : (
          <div>No items found in this category.</div>
        )}
      </div>
    </div>
  );
};

export default Listing;
