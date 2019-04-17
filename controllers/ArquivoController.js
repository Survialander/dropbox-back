const Arquivo = require('../models/Arquivo');
const Box = require('../models/Box');

class ArquivoController{
    async store(req, res){
        const box = await Box.findById(req.params.id)

        const arquivo = await Arquivo.create({
            title: req.file.originalname,
            path: req.file.key,
        })
        
        box.files.push(arquivo);
        await box.save();
        
        req.io.sockets.in(box._id).emit('arquivo', arquivo);

        return res.json(arquivo);
    }
}

module.exports = new ArquivoController();