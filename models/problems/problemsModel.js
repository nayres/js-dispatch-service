import mongoose from 'mongoose';

const Problem = new mongoose.Schema({
  difficulty: String,
  author: String,
  language: String,
  title: String,
  description: String,
  example: String,
  snippet: String,
  testCase: String
});

export const ProblemModel = mongoose.model('problem', Problem);
