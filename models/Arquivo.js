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
    const url = 'https://dropp-box-back.herokuapp.com' || process.env.URL
    
    return `${url}/arquivos/${encodeURIComponent(this.path)}` })

module.exports = mongoose.model('Arquivo', arquivo);