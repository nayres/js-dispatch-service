import mongoose from 'mongoose';
import { Problem } from './Problem';

export const ProblemsModel = mongoose.model('problem', Problem);
