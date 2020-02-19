import { Schema } from 'mongoose';

const TestCase = new Schema({
  functionCall: String,
  expectedResult: String
});

export { TestCase };
