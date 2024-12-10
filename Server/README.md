# Server Side Application

## Deskripsi
Server side application ini dibangun menggunakan Node.js dan Express.js sebagai backend untuk aplikasi pembelian kredit. Aplikasi ini menangani autentikasi pengguna, transaksi pembelian kredit, dan integrasi dengan payment gateway.

## Fitur Utama
- Autentikasi Pengguna
- Manajemen Transaksi Pembelian Kredit
- Integrasi Payment Gateway
- API Endpoints untuk Client Side

## API Endpoints

### User Routes
- `POST /api/user/register` - Registrasi pengguna baru
- `POST /api/user/login` - Login pengguna
- `GET /api/user/profile` - Mendapatkan profil pengguna
- `POST /api/user/buy-credit` - Pembelian kredit

### Transaction Routes
- `POST /api/transaction/create` - Membuat transaksi baru
- `GET /api/transaction/history` - Mendapatkan riwayat transaksi
- `GET /api/transaction/:id` - Mendapatkan detail transaksi

## Teknologi yang Digunakan
- Node.js
- Express.js
- MongoDB (Database)
- JWT (JSON Web Token) untuk autentikasi
- Midtrans Payment Gateway

## Cara Menjalankan

1. Install dependencies

2. Setup environment variables
Isi variabel environment yang diperlukan:
- `MONGODB_URI`
- `JWT_SECRET`
- `MIDTRANS_SERVER_KEY`
- `MIDTRANS_CLIENT_KEY`

3. Jalankan server

## Environment Variables

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your_database
JWT_SECRET=your_jwt_secret
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key


## Integrasi dengan Client
Server ini terintegrasi dengan aplikasi client yang dibuat menggunakan React.js. Pastikan endpoint API yang digunakan di client sesuai dengan yang didefinisikan di server.

## Error Handling
Server mengimplementasikan error handling yang konsisten dengan format response:


## Kontribusi
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi
Distributed under the MIT License. See `LICENSE` for more information.