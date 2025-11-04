const request = require('supertest');
const app = require('../../app');

describe('Authentication Tests', () => {
  test('Health check should work', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('Login with valid manager credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'manager@company.com', password: 'password' });
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.token).toBeDefined();
  });

  test('Login with valid engineer credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'engineer@company.com', password: 'password' });
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test('Login with invalid email should fail', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@company.com', password: 'password' });
    
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
  });
});