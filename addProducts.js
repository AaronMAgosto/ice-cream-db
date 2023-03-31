import { client, productsCollection } from "./mongoconnect.js";

const addProducts = async () => {
  // right beofre the parameters you add async
  const products =[ {
    name: "single scoop",
    price: 10,
    stock: 20,
  },
    { name : "double scoop", 
      price : 20,
      stock: 22,
    },
    {
        name: "waffle cone",
        price: 2,
        stock: 24,
    },
    {
        name: "sundae",
        price: 25,
        stock: 26,
    },
    {
        name: "banana split",
        price: 50,
        stock: 99,
    },
    

  ]
  try {
    await client.connect();
    const addedProducts= await productsCollection.insertMany(products);
    console.log(addedProducts);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

addProducts();