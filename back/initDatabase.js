import mongoose from "mongoose";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

// Conexión a MongoDB
const MONGO_URI = "mongodb://localhost:27017/sweetshop";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connectado a MongoDB");
    initializeDatabase();
  })
  .catch((err) => {
    console.error("MongoDB Error de coneccion:", err);
  });

const initializeDatabase = async () => {
  try {
    // Eliminar todas las categorías y productos existentes
    await Category.deleteMany({});
    await Product.deleteMany({});

    // Crear nuevas categorías
    const categories = [
      new Category({ name: "CARAMELOS" }),
      new Category({ name: "CHOCOLATES" }),
      new Category({ name: "NUBES" }),
    ];

    for (let category of categories) {
      await category.save();
    }

    console.log("Categories created");

    // Crear nuevos productos
    const products = [
      new Product({
        name: "CARAMELO MASTICABLE",
        price: 5,
        description: "Delicioso caramelo masticable",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/gerio.jpg",
      }),
      new Product({
        name: "CHUPA CONDE DRACULA",
        price: 7,
        description: "Delicioso caramelo halloween",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2017/02/1812956.jpg",
      }),
      new Product({
        name: "CEREZAS",
        price: 4,
        description: "Cerezas envueltas Fini bolsa",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2020/06/2833251.jpg",
      }),
      new Product({
        name: "RELOJES PICA",
        price: 8,
        description: "Tarro de deliciosos relojes pica",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/11/1853660.jpg",
      }),
      new Product({
        name: "ESTRELLAS DE MAR",
        price: 5,
        description: "Deliciosas estrellas de gominola",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1835535.jpg",
      }),
      new Product({
        name: "GUSANOS BRILLO FINI",
        price: 6,
        description: "Deliciosos gusanitos de gominola",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1836751.jpg",
      }),
      new Product({
        name: "OSOS XXL FINI",
        price: 6,
        description: "Deliciosos ositos de gominola",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1832851.jpg",
      }),
      new Product({
        name: "MELONES ENVUELTOS FINI",
        price: 12,
        description: "Chiclet sabor a melon",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2020/06/1860951.jpg",
      }),
      new Product({
        name: "LADRILLOS FRESA Y NATA FINI",
        price: 10,
        description: "Deliciosos Ladrillos de regaliz sabor a fresa y nata",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2020/06/2831551.jpg",
      }),
      new Product({
        name: "SUGUS BOLSA",
        price: 12,
        description: "Caramelos masticables sabor a frutas",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2017/06/1800612.jpg",
      }),
      new Product({
        name: "CUCURUCHO CHOCO",
        price: 10,
        description: "Deliciosos cucuruchos de galleta rellenos de chocolate",
        category: categories[1]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1840019.jpg",
      }),
      new Product({
        name: "LACASITOS TUBO",
        price: 12,
        description: "Pastillas de colores rellenas de chocolate",
        category: categories[1]._id,
        image: "https://tododulce.es/wp-content/uploads/2020/06/2840005.jpg",
      }),
      new Product({
        name: "BOKADITOS CHOCOLATE",
        price: 13,
        description: "Palitos de galleta con chocolate",
        category: categories[1]._id,
        image: "https://tododulce.es/wp-content/uploads/2020/05/840026.jpg",
      }),
      new Product({
        name: "PUROS HABANOS",
        price: 13,
        description: "Habanos de chocolate",
        category: categories[1]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/11/1816323.jpg",
      }),
      new Product({
        name: "MONEDAS CHOCOLATE",
        price: 15,
        description: "Monedas de delicioso chocolate",
        category: categories[1]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/05/1840723-1.jpg",
      }),
      new Product({
        name: "FLAMAS SURTIDAS",
        price: 7,
        description: "Deliciosas nubes de colores",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1890123.jpg",
      }),
      new Product({
        name: "FINITRONC CORAZON FINI",
        price: 8,
        description: "Suaves y dulces corazones de nube",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1893251.jpg",
      }),
      new Product({
        name: "BOLAS DE GOLF SURTIDAS",
        price: 6,
        description: "Suaves bolas de golf de colores",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1890951.jpg",
      }),
      new Product({
        name: "FINITRONC ESPIRALES FINI",
        price: 9,
        description: "Nubes esponjosas en espiral de colores",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1892951.jpg",
      }),
      new Product({
        name: "FINITRONC FLORES",
        price: 7,
        description: "Nubes esponjosas en espiral de colores",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/05/1890451.jpg",
      }),
      new Product({
        name: "FINITRONC DIANAS",
        price: 8,
        description: "Nubes esponjosas en forma de diana de colores",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/05/1891351.jpg",
      }),
      new Product({
        name: "MARGARITAS MASMELOW",
        price: 7,
        description: "Nubes esponjosas en forma de margaritas",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2016/05/1891823.jpg",
      }),
      new Product({
        name: "FINITRONC AZUL FINI",
        price: 8,
        description: "Palitos de nubes azules deliciosos",
        category: categories[2]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1890251.jpg",
      }),
      new Product({
        name: "HUEVOS DE CHOCOLATE BARBIE",
        price: 13,
        description: "Huevos de chocolate con leche, con una fantástica sorpresa.",
        category: categories[1]._id,
        image: "https://www.lacasadelasgolosinas.com/12811-large_default/huevos-de-chocolate-barbie-24-unidades.jpg",
      }),
      new Product({
        name: "HUEVOS DE CHOCOLATE UNICORNIO",
        price: 13,
        description: "Huevos de chocolate Unicornios con sorpresa.",
        category: categories[1]._id,
        image: "https://www.lacasadelasgolosinas.com/12817-large_default/huevos-de-chocolate-unicornios-24-unidades.jpg",
      }),
      new Product({
        name: "KINDER SCHOKO-BONS",
        price: 4,
        description: "Suave corazón de leche con crujientes trocitos de avellana recubierto de una fina capa de chocolate Kinder",
        category: categories[1]._id,
        image: "https://www.lacasadelasgolosinas.com/13293-large_default/kinder-schoko-bons-bolsa-125gr.jpg",
      }),
      new Product({
        name: "MEGA FIZZ ROLL PICA",
        price: 10,
        description: "Caramelos de colores con  pica pica",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1853460.jpg",
      }),
      new Product({
        name: "TIBURONES BOLSA TROLLI",
        price: 8,
        description: "Tiburones de gominola divertidos",
        category: categories[0]._id,
        image: "https://tododulce.es/wp-content/uploads/2021/04/1830435.jpg",
      }),
    ];

    for (let product of products) {
      await product.save();
    }

    console.log("Products created");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error initializing database:", error);
    mongoose.connection.close();
  }
};
