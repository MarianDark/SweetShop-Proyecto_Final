import express from 'express';
import { registerUser, loginUser} from '../controllers/userController.js';
import User from '../models/User.js';



const router = express.Router();

// Middleware para aumentar el límite de tamaño de los encabezados
router.use(express.json({ limit: '20mb' }));
router.use(express.urlencoded({ limit: '20mb', extended: true }));

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está en uso' });
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario
    const newUser = new User({ name, email, password: hashedPassword });

    // Guardar el usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Ejemplo de ruta POST para iniciar sesión
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Aquí deberías autenticar al usuario
  // Ejemplo: verificar las credenciales con la base de datos
  if (email && password) {
    // Ejemplo simple: devolver éxito si las credenciales son válidas
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ message: 'Correo o contraseña incorrectos' });
  }
});

// Definir rutas para usuarios

// Ejemplo de ruta GET para obtener información de usuario por ID
router.get('/:id', (req, res) => {
    // Aquí deberías obtener la información del usuario desde la base de datos
    const userId = req.params.id;
    // Ejemplo: consulta a la base de datos para obtener datos del usuario con el userId
    res.status(200).json({ message: `Obtener datos del usuario con ID ${userId}` });
  });
  
  export default router;

