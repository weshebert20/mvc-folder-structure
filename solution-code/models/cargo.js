var Schema = mongoose.Schema;
var CargoSchema = new Schema({
    title: String,
    description: String
});
var Cargo = mongoose.model('Cargo', CargoSchema);
