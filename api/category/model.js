const { Schema, Model} = require('mongoose')

const CategoryName = new Schema(
    {
        CategoryName : {
            type : String,
            unique : true,
            required : true
        },
        CategoryImage : {
            type : String,
            required : true
        }
    }
)

const Category = model('category', CategorySchema)

module.exports = Category