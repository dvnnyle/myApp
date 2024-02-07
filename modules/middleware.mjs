import express from 'express';

const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: true }));



export default router;  
