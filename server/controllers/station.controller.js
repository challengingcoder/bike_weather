import Station from '../models/station';

export async function getStation(req, res) {
  try {
    const result = await Station.find({ at: req.params.at, kioskId: req.params.kioskId }).exec();
    res.json({ result });
  } catch (err) {
    res.status(500).send(err);
  }
}
export async function getAllStations(req, res) {
  try {
    const result = await Station.find({ at: req.params.at }).exec();
    res.json({ result });
  } catch (err) {
    res.status(500).send();
  }
}
