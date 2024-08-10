const Admin = require("../repositories/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AdminService {
  async createAdmin(newAdmin) {
    const isExisted = await this.findAdminByEmail(newAdmin.email);
    if (isExisted) {
      throw new Error("Đã tồn tại email");
    }
    newAdmin.password = await bcrypt.hash(newAdmin.password, 10);
    const createdAdmin = await Admin.create(newAdmin);
    return createdAdmin;
  }

  async findAdminByEmail(email) {
    const admin = await Admin.findOne({ where: { email } });
    return admin;
  }

  async login(email, password) {
    const isExisted = await this.findAdminByEmail(email);

    if (!isExisted) {
      throw new Error("Không tồn tại tài khoản");
    }

    const isMatch = await bcrypt.compare(password, isExisted.password);

    if (!isMatch) {
      throw new Error("Sai tên tài khoản hoặc mật khẩu");
    }

    const payload = {
      userId: isMatch.id,
      name: isMatch.name,
    };

    const access_token = jwt.sign(payload, "Secret Key", { expiresIn: "2h" });

    return access_token;
  }
}

module.exports = new AdminService();
