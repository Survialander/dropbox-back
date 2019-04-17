const mongoose = require('mongoose');

const arquivo = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true,
    },
},
{
    timestamps:true,
    toJSON: { virtuals: true},
    toObject: { virtuals: true}
});

arquivo.virtual('url').get(function(){ 
    const url = process.env.URL || 'http://localhost:3333';
    
    return `${url}/arquivos/${encodeURIComponent(this.path)}` });

module.exports = mongoose.model('Arquivo', arquivo);