import express, { type Express } from 'express';
//
import requestRouter from './routes/blood-request.routes.js';
import donorRouter from './routes/donor.routes.js';
import donationRouter from './routes/donation.routes.js';
import hospitalRouter from './routes/hospital.routes.js';
import staffRouter from './routes/auth.routes.js';
const app: Express = express();

// app.get('/', (_req, res) => {
// 	res.json({ message: 'BloodConnect API is running' });
// });

// app.use(
// 	cors({
// 		origin: '*',
// 		// origin: ['http://localhost:3000'],
// 		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
// 		allowedHeaders: ['Content-Type', 'Authorization'],
// 		// credentials: true,
// 	}),
// );

app.use(express.json());

app.use('/auth', staffRouter);
app.use('/donors', donorRouter);
app.use('/requests', requestRouter);
app.use('/hospitals', hospitalRouter);
app.use('/donations', donationRouter);

export default app;
