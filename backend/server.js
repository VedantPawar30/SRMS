const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// -----------comment these if using 2 separate VMs (backend VM + frontend VM)
// If using 1 VM: uncomment these AND run 'npm run build' in frontend first
// NOTE: Vite builds to 'dist/', NOT 'build/' like CRA

// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });


// 1 -> sudo apt update && sudo apt upgrade -y
// 2 -> curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
// 3 -> sudo apt install nodejs -y
// 4 -> node -v
//      npm -v
// 5 -> sudo apt install git -y
// 6 -> git clone https://github.com/VedantPawar30/SRMS.git
// 7 -> cd SRMS
// 8 -> cd backend 
// 9 -> npm install
// 10-> nano .env
// 11 -> node server.js
// 12 -> sudo npm install -g pm2
// 13 -> pm2 start server.js --name srms-backend
// 14 -> pm2 save
// 15 -> pm2 startup  -- Run the cmd which comes in Output
// 16 -> pm2 status
// 17 -> cd ../frontend
// 18 -> npm install
// 19 -> Go to App.jsx and Change PublicIp in URL
// 20 -> npm run build    -- Dist folder created
// 21 -> sudo apt install nginx -y
// 22 -> sudo systemctl start nginx
// 23-> sudo systemctl enable nginx
// 24 -> sudo rm /etc/nginx/sites-enabled/default
// 25 -> sudo nano /etc/nginx/sites-available/srms-app
// 26 -> server {
//     listen 80;

//     server_name _;

//     location / {
//         root /home/ubuntu/SRMS/frontend/dist;
//         index index.html;
//         try_files $uri /index.html;
//     }

//     location /api {
//         proxy_pass http://localhost:5000;
//     }
// }

// 27-> sudo ln -s /etc/nginx/sites-available/srms-app /etc/nginx/sites-enabled/
// 28 -> sudo chmod -R 755 /home/ubuntu
// 29 -> sudo chmod -R 755 /home/ubuntu/srms
// 30 -> sudo nginx -t
// 31 -> sudo systemctl restart nginx
// 32 -> http://YOUR_PUBLIC_IP   (Deployed!!)
