import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js'; // Asumiendo que este archivo configura la conexión a MongoDB
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { registerUser, loginUser } from './controllers/authController.js';


dotenv.config();
connectDB(); // Llama a la función que establece la conexión a MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Aumenta el límite de tamaño de los encabezados
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes); // Cambiado a '/api/products' para evitar conflicto con '/api/product'
app.use('/api/users', userRoutes);

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error al conectar a MongoDB:', err);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});