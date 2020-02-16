import { Schema } from 'mongoose';
import { TestCase, RelatedProblems} from './code';

const Problem = new Schema({
  difficulty: String,
  author: String,
  language: String,
  title: String,
  documentation: {
    description: String,
    example: String,
    tags: [String]
  },
  code: {
    snippet: String,
    testCase: [TestCase],
    children: [RelatedProblems]
  },
});

export { Problem };
