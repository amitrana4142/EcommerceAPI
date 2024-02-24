const formidable = require('formidable')
const dotenv = require('dotenv')
dotenv.config()
module.exports = {

    getImage(file, parentFolder) {
        try {
            let file_name_string = file.name;
            var file_name_array = file_name_string.split(".");
            var file_extension = file_name_array[file_name_array.length - 1];
            var result = "";
            result = Math.floor(Date.now() / 1000)
            let name = result + '.' + file_extension;
            file.mv(`./public/${parentFolder}/${name}`, function (err) {
                if (err) throw err;
            });
            // const imagePath= process.cwd()+'\\public\\'+parentFolder+'\\'+name
            // console.log(imagePath);
            return name;

        } catch (err) {
            console.log("Unable to find image")
            console.log(err)
        }
    },
    productImage(file) {
        try {
        return( this.getImage(file, 'productImage'))

        } catch (err) {
            console.log("Unable to find image")
            console.log(err)


        }

    },
    storeImage(file) {
        try {
           return( this.getImage(file, 'storeImage'))

        } catch (err) {
            console.log("Unable to find image")
            console.log(err)


        }

    },

    getProductImage(){
        try {
            
        } catch (err) {
            console.log("Unable to get image")
            console.log(err)
        }

    }
}