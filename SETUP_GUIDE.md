# JOHN ONLINE SERVICES & APPLICATIONS (JOSA)

## 🚀 Enterprise-Grade Digital Services Platform

A complete, production-ready Next.js 15+ full-stack platform for managing digital services including student applications, business services, IT solutions, and tourism packages.

---

## ✨ Features

### Public Features
- **18+ Marketing Pages**: Home, About, Services, Pricing, Blog, FAQ, Contact, Terms, Privacy, etc.
- **Service Catalog**: Browse services by category with detailed information
- **Service Wizard**: Guided wizard to help customers choose services
- **Responsive Design**: Mobile-first approach with dark/light mode support
- **Premium UI/UX**: Glassmorphism effects, smooth animations, modern design

### Customer Features
- **User Authentication**: Secure JWT-based authentication
- **Customer Dashboard**: Track orders, payments, files, notifications
- **Order Tracking**: Real-time order status with tracking number
- **File Management**: Upload, preview, download, and version history
- **Payment Integration**: PeterPay push checkout with webhook verification
- **Referral System**: Earn rewards by referring friends

### Admin Features
- **Admin Dashboard**: Comprehensive analytics and metrics
- **User Management**: Manage customers, staff, roles, and permissions
- **Order Management**: View, update, and track all orders
- **Payment Management**: Monitor transactions and revenue
- **Content Management**: Manage services, blogs, testimonials
- **Audit Logs**: Complete activity tracking and security logs
- **Analytics Center**: Revenue charts, trends, forecasting
- **Security Center**: 2FA, IP tracking, session monitoring

### Business Features
- **RBAC System**: Flexible role-based access control
- **Multi-tenant Ready**: Scalable architecture for growth
- **Performance Optimized**: Caching, lazy loading, optimized queries
- **SEO Ready**: Dynamic metadata, XML sitemaps, structured data

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Accessible component library
- **Framer Motion** - Animation library
- **Recharts** - Data visualization

### Backend
- **Next.js Route Handlers** - RESTful API routes
- **Server Actions** - Serverless functions
- **JWT Authentication** - Secure token-based auth
- **Prisma ORM** - Type-safe database client

### Database
- **PostgreSQL** - Production-grade database
- **Prisma** - Modern ORM with migrations

### Infrastructure
- **Vercel** - Deployment platform
- **Redis** - Caching layer (optional)
- **Cloudinary** - File storage and CDN
- **PeterPay** - Payment gateway

---

## 📊 Database Models

The platform includes 20+ database models:

- **Users, Profiles, Sessions** - User management
- **Roles, Permissions** - Access control
- **Services, Categories** - Service catalog
- **Orders, OrderStatusHistory** - Order management
- **Payments, Invoices, Receipts** - Payment tracking
- **Files** - File storage metadata
- **BlogPosts, Testimonials** - Content management
- **SupportTickets, TicketMessages** - Support system
- **Referrals, Coupons** - Rewards system
- **Notifications** - User notifications
- **AuditLogs, ActivityLogs** - Security auditing
- **Settings, FeatureFlags** - System configuration

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL 13+
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd john-online-services
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
# Copy the example environment file
cp .env.local.example .env.local

# Update with your values
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/john_services
JWT_SECRET=your-super-secret-key-change-this
PETERPAY_API_KEY=your_api_key
PETERPAY_SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
```

4. **Setup PostgreSQL Database**
```bash
# Create a new PostgreSQL database
createdb john_services

# Update DATABASE_URL in .env.local with your connection string
```

5. **Run Prisma migrations**
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view data
npm run prisma:studio
```

6. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
john-online-services/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── dashboard/         # Customer dashboard
│   ├── auth/              # Authentication pages
│   ├── services/          # Services pages
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── layouts.tsx
│   ├── sections.tsx
│   ├── dashboard-layout.tsx
│   └── admin-layout.tsx
├── lib/                   # Utility functions
│   ├── auth.ts           # JWT utilities
│   ├── formatting.ts     # Data formatting
│   ├── validation.ts     # Input validation
│   ├── constants.ts      # Constants
│   └── errors.ts         # Error handling
├── types/                # TypeScript types
│   └── index.ts
├── prisma/              # Database schema
│   └── schema.prisma
├── public/              # Static assets
└── config/              # Configuration files
```

---

## 🔐 Authentication

The platform uses JWT (JSON Web Tokens) for authentication:

1. **User Registration**: POST `/api/auth/register`
2. **User Login**: POST `/api/auth/login`
3. **Token Verification**: Used in protected routes
4. **Token Refresh**: Automatic token renewal

### Protected Routes
- `/dashboard/*` - Customer dashboard
- `/admin/*` - Admin dashboard
- `/api/orders/*` - Order endpoints
- `/api/payments/*` - Payment endpoints

---

## 💳 Payment Integration

### PeterPay Configuration

1. **Get API Credentials**
   - Visit peterpay.link
   - Create an account and get API keys
   - Add to `.env.local`

2. **PeterPay API Endpoints**
   - `POST /api/payments/create` - Initiate payment
   - `PUT /api/payments/:id/status` - Check status
   - Webhook endpoint for payment confirmation

3. **Payment Flow**
```
Customer → Service Order → Payment Page → PeterPay → Confirmation
```

---

## 📧 Email Notifications

Setup email notifications in `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

---

## 🗄️ Cloudinary File Storage

1. **Sign up at cloudinary.com**
2. **Get your credentials**
3. **Add to `.env.local`**:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to vercel.com
   - Connect your GitHub repository
   - Add environment variables
   - Deploy

3. **Setup Production Database**
   - Use Vercel PostgreSQL or external provider
   - Update `DATABASE_URL` with production URL
   - Run migrations on production

### Environment Variables for Production

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
DATABASE_URL=your_production_db_url
JWT_SECRET=long_random_secret_key
PETERPAY_API_KEY=your_peterpay_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
```

---

## 📊 Admin Credentials

Default admin accounts (setup manually in database):

```
Email: admin@johnonline.com
Password: AdminPass123!
```

---

## 🔧 Configuration

### Service Categories

Edit `lib/constants.ts` to customize:
- Service categories
- Payment methods
- Order statuses
- Roles and permissions

### Customization

1. **Branding**
   - Update logo in navbar/footer
   - Change colors in Tailwind config
   - Update metadata in `app/layout.tsx`

2. **Email Templates**
   - Create templates in `/emails` folder
   - Use templates in API routes

3. **Database**
   - Modify schema in `prisma/schema.prisma`
   - Run `npm run prisma:migrate`

---

## 📈 Performance

### Optimization Features
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Database query optimization
- ✅ Caching with Redis
- ✅ CDN integration with Cloudinary

### Metrics
- Target Lighthouse score: 90+
- Target Core Web Vitals: Good
- Support for 500+ concurrent users

---

## 🔒 Security

### Implemented Security Features
- ✅ JWT token-based authentication
- ✅ Password hashing with bcryptjs
- ✅ CORS protection
- ✅ SQL injection prevention (Prisma)
- ✅ XSS protection
- ✅ HTTPS enforcement
- ✅ Secure headers
- ✅ Rate limiting ready
- ✅ Audit logging
- ✅ Session tracking

### Security Best Practices
1. Change JWT_SECRET in production
2. Use strong database passwords
3. Enable HTTPS only
4. Regular security audits
5. Keep dependencies updated

---

## 📚 API Documentation

### Authentication Endpoints

**Register User**
```
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Login User**
```
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

### Orders Endpoints

**Get Orders**
```
GET /api/orders
Authorization: Bearer <token>
```

**Create Order**
```
POST /api/orders
Authorization: Bearer <token>
{
  "serviceId": "service-id",
  "notes": "Optional notes"
}
```

### Payments Endpoints

**Create Payment**
```
POST /api/payments/create
Authorization: Bearer <token>
{
  "orderId": "order-id",
  "amount": 50000,
  "phone": "+255712345678"
}
```

---

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
- Check DATABASE_URL format
- Verify PostgreSQL is running
- Verify database name matches

**JWT Token Expired**
- Tokens expire after 7 days (configurable)
- User needs to login again
- Or refresh token endpoint

**Payment Integration Issues**
- Verify PeterPay API keys
- Check webhook configuration
- Monitor PeterPay logs

**Build Errors**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Regenerate Prisma client: `npm run prisma:generate`

---

## 📞 Support

### Getting Help

1. **Documentation**: Check inline code comments
2. **GitHub Issues**: Report bugs on GitHub
3. **Community**: Join our community forum
4. **Email**: support@johnonline.com

---

## 📝 License

This project is proprietary and confidential.

---

## 🎯 Future Enhancements

- [ ] Mobile app with React Native
- [ ] AI-powered service recommendations
- [ ] Advanced analytics with ML
- [ ] Video call support for consultations
- [ ] Multi-language support
- [ ] Advanced reporting features
- [ ] Integration with more payment gateways
- [ ] API documentation (OpenAPI/Swagger)

---

## 📊 Statistics

- **Pages**: 18+
- **Components**: 50+
- **API Routes**: 10+
- **Database Models**: 20+
- **Lines of Code**: 5,000+
- **Supported Languages**: English (Extensible)

---

**Built with ❤️ by John Online Services**

Last Updated: January 2024
