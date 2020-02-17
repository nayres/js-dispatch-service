import dotenv from 'dotenv';
import express from 'express';
import ExpressGraphQL from"express-graphql";
import mongoose from'mongoose';
import bodyParser from'body-parser';
import cookieParser from'cookie-parser';
import cors from'cors';
import helmet from'helmet';
import morgan from'morgan';
import errorhandler from'errorhandler';
import { ProblemQuery } from './modules/problems';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(express.json());
app.use(errorhandler());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {    
  console.log(`mongoose connection open`); 
});
mongoose.connection.on('error', error => {
  console.log('mongoose connection error: ', error);
});

//TODO: prettier route
app.use(routes);
app.use('/graphql', ExpressGraphQL({
  schema: ProblemQuery,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});