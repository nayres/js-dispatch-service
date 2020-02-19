import express from 'express';
import { node } from 'compile-run';
const router = express.Router();

router.post('/codeSubmission', (req, res) => {
  const functionCall = `console.log(${req.body.functionCall})`
  const userSubmission = req.body.userSubmission;
  const exec = `${userSubmission} ${functionCall}`;
  let resultPromise = node.runSource(exec);
  resultPromise
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => {
      console.log(err);
    });
});

export default router;
