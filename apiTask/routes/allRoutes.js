import express from 'express';
import { getAverage } from '../controller/getAverage.js';
import { getData } from '../controller/getData.js';
import { getKeys } from '../controller/getKeys.js';
import { removeDuplicate } from '../controller/removeDuplicate.js';
import { getError, getHighestValue, uploadFile } from '../controller/othres.js';
import { upload } from '../services/upload.js';



const router =express.Router();

router.get('/getAverage',getAverage);
router.get('/getData',getData);
router.get('/getKeys',getKeys);
router.get('/removeDuplicate',removeDuplicate);
router.get('/others/getHighestValue',getHighestValue);
router.get('/others/getError',getError)
router.post('/others/upload',upload,uploadFile)

export default router