const users = [
  {
    id: 1,
    email: 'manager@company.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    role: 'manager',
    name: 'Project Manager'
  },
  {
    id: 2,
    email: 'engineer@company.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    role: 'engineer',
    name: 'Software Engineer'
  }
];

class User {
  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static findById(id) {
    return users.find(user => user.id === parseInt(id));
  }

  static getAll() {
    return users;
  }
}

module.exports = User;