const express = require('express');
const BoxController = require('./controllers/BoxController');
const ArquivoController = require('./controllers/ArquivoController');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');


router.post('/boxes', BoxController.store)
router.post('/boxes/:id/arquivos', multer(multerConfig).single('arquivo'), ArquivoController.store)
router.get('/boxes/:id', BoxController.show)

module.exports = router;