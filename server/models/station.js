import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const stationSchema = new Schema({
  addressStreet: { type: String, required: true },
  addressCity: { type: String, required: true },
  addressZipCode: { type: Number, required: false },
  at: { type: Date, default: Date.now, required: true },
  docksAvailable: { type: Number, required: true },
  kioskId: { type: Number, required: true },
});
export default mongoose.model('Station', stationSchema);
