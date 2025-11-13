# Authentication System Documentation

## ✅ Komponen yang Telah Dibuat

### 1. **Login Page** (`/src/app/login/page.tsx`)
- Form login dengan username dan password
- Validasi input
- Error handling
- Auto-redirect berdasarkan role (admin/patient)
- Link ke halaman register
- Responsive design dengan gradient theme

### 2. **Register Page** (`/src/app/register/page.tsx`)
- Form registrasi lengkap (username, email, password, confirm password, role)
- Validasi password (min 6 karakter, password match)
- Role selection (Patient/Admin)
- Error handling
- Auto-redirect setelah registrasi
- Link ke halaman login

### 3. **Updated Navbar** (`/src/components/Navbar.tsx`)
- Dynamic navbar berdasarkan status login
- Avatar dropdown untuk user yang sudah login
- Menu dropdown dengan:
  - Dashboard
  - Profile
  - Admin Panel (untuk admin only)
  - Logout
- Sign in/Sign up buttons untuk guest
- User info display (name, email, role)

### 4. **Dashboard Page** (`/src/app/dashboard/page.tsx`)
- Protected route (auto-redirect ke login jika belum login)
- Welcome message dengan nama user
- Stats cards (Consultations, AI Interactions, Health Score)
- Quick actions (Start Consultation, Chat with MediBot)
- Recent activity section
- Integrated ChatbotWidget

### 5. **Auth Service** (`/src/lib/authService.ts`)
- `login()` - Login user
- `register()` - Register new user
- `logout()` - Clear auth data
- `getCurrentUser()` - Get current logged in user
- `getToken()` - Get JWT token
- `isAuthenticated()` - Check authentication status
- `saveAuthData()` - Save token and user data
- `isAdmin()` - Check if user is admin

### 6. **Updated ChatbotWidget**
- Auth check sebelum chat
- Error message jika belum login
- Token dari localStorage untuk API calls

---

## 🔐 Database Schema (Users Table)

```prisma
model users {
  id            Int      @id @default(autoincrement())
  name          String?  @db.VarChar(255)
  email         String?  @unique @db.VarChar(255)
  passwordHash  String   @db.VarChar(255)
  role          String   @default("patient") @db.VarChar(50)
  createdAt     DateTime @default(now())
  deletedAt     DateTime @default(now())

  consultations consultations[]
}
```

---

## 🚀 API Endpoints

### Login
**Endpoint:** `POST /api/v1/auth/login`

**Request Body:**
```json
{
  "name": "username",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User logged in successfully",
  "user": {
    "id": 1,
    "name": "username",
    "role": "patient"
  },
  "type": "Bearer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Register
**Endpoint:** `POST /api/v1/auth/register`

**Request Body:**
```json
{
  "name": "username",
  "email": "user@example.com",
  "password": "password123",
  "role": "patient"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "username",
    "role": "patient"
  },
  "type": "Bearer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📱 User Flow

### Registration Flow
1. User mengakses `/register`
2. Mengisi form (username, email, password, confirm password, role)
3. Submit form
4. Token disimpan di localStorage
5. Auto-redirect ke dashboard

### Login Flow
1. User mengakses `/login`
2. Mengisi username dan password
3. Submit form
4. Token disimpan di localStorage
5. Auto-redirect ke dashboard

### Logout Flow
1. User klik dropdown menu
2. Pilih "Logout"
3. Token dihapus dari localStorage
4. Redirect ke homepage

---

## 🎨 UI/UX Features

### Design Elements
- Gradient theme (Blue to Purple)
- Glass morphism effects (backdrop-blur)
- Smooth transitions
- Responsive layout
- Loading states
- Error alerts
- Avatar with initials
- Dropdown menus

### Accessibility
- Proper form labels
- Required field validation
- Error messages
- Loading indicators
- Keyboard navigation support

---

## 🔒 Security Features

1. **JWT Authentication**
   - Token-based auth
   - Secure token storage in localStorage
   - Bearer token in API requests

2. **Password Security**
   - Bcrypt hashing
   - Minimum 6 characters
   - Password confirmation

3. **Protected Routes**
   - Auto-redirect if not authenticated
   - Role-based access control
   - Token validation

4. **Input Validation**
   - Email format validation
   - Password match check
   - Required fields
   - SQL injection prevention (Prisma)

---

## 📊 localStorage Structure

```javascript
// Token
localStorage.getItem('token')
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

// User Data
localStorage.getItem('user')
// '{"id":1,"name":"username","email":"user@example.com","role":"patient"}'
```

---

## 🧪 Testing

### Test User Registration
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "testuser",
    "email": "test@example.com",
    "password": "test123",
    "role": "patient"
  }'
```

### Test User Login
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "name": "testuser",
    "password": "test123"
  }'
```

---

## 📋 Usage Examples

### Using Auth Service in Components

```typescript
import { login, register, logout, getCurrentUser, isAuthenticated } from '@/lib/authService';

// Login
const result = await login({ name: 'user', password: 'pass123' });
console.log(result.user);

// Register
const result = await register({
  name: 'newuser',
  email: 'new@example.com',
  password: 'pass123',
  role: 'patient'
});

// Check authentication
if (isAuthenticated()) {
  const user = getCurrentUser();
  console.log(user.name);
}

// Logout
logout();
```

---

## 🔧 Troubleshooting

### Issue: "User not found" after registration
**Solution:** Check database connection and Prisma schema

### Issue: Token expired
**Solution:** Implement token refresh mechanism or ask user to login again

### Issue: Redirect loop
**Solution:** Check localStorage for corrupted data, clear it

### Issue: CORS error
**Solution:** Ensure API routes are in `/api` directory

---

## 🎯 Next Steps

1. ✅ Implementasi auth system
2. ✅ Protected routes
3. ✅ Dashboard page
4. 🔄 Implement consultation features
5. 🔄 Add profile page
6. 🔄 Add admin panel
7. 🔄 Add password reset
8. 🔄 Add email verification

---

## 📞 Routes Summary

| Path | Description | Auth Required |
|------|-------------|---------------|
| `/` | Homepage | No |
| `/login` | Login page | No |
| `/register` | Register page | No |
| `/dashboard` | User dashboard | Yes |
| `/profile` | User profile | Yes |
| `/admin` | Admin panel | Yes (Admin only) |

---

## 💡 Tips

- Always check `isAuthenticated()` before accessing protected features
- Use `getToken()` for API calls that require authentication
- Clear localStorage on logout
- Validate user role for admin features
- Handle token expiration gracefully
