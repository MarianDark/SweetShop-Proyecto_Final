import User from '../models/User.js'; // Asegúrate de ajustar la ruta según sea necesario

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    req.user = await User.findById(req.session.userId).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    next();
  } catch (error) {
    console.error('Error en el middleware de autenticación:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export default authMiddleware;