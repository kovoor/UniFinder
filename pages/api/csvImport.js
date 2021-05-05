// import csvParser from '../../utils/csvParser'
import Uni from "../../data/models/Uni";
import dbConnect from "../../utils/dbConnect";
// import csvParser from '../../utils/csvParser'

try {
  //only uncomment if data needs updating or if removed by chance
  // csvParser()
  dbConnect();
} catch (e) {
  console.log("Catch an error: ", e);
}

const unis = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        await Uni.find({});
        res.status(200).json(unis);
      } catch (error) {
        res.status(400).json("Catch an error: ", error);
      }
      break;
    default:
      res.status(400).json("Catch an error --default");
      break;
  }
};

export default handler;
