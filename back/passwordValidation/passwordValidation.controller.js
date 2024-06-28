import bcrypt from 'bcryptjs';

export const validatePassword = async (req, res, next) => {
  try {
    const { plainTextPassword, hash } = req.body;
    const isMatch = await bcrypt.compare(plainTextPassword, hash);

    return res.status(200).json({
      message: "Resultado de la comparación de contraseñas",
      match: isMatch,
    });
  } catch (error) {
    return next(error);
  }
};
