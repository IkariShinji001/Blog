const AdminService = require("../services/admin.service");

class AdminController {
  async createAdmin(req, res, next) {
    const newAdmin = req.body;
    try {
      const createdAdmin = await AdminService.createAdmin(newAdmin);
      return res.status(200).json(createdAdmin);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const access_token = await AdminService.login(email, password);
      res.cookie("access_token", access_token, { httpOnly: true });
      return res.status(200).json({ message: "Đăng nhập thành công" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AdminController();
