import dbConnect from "../utils/dbConnect";
import Uni from "../data/models/Uni";
import getTotalUnis from "../database/getTotalUnis";

export default async function getUnis(props) {
    await dbConnect();
    const curPage = props.page || 1;
    const perPage = 10;

    if(props.maxTuition & props.minTuition) {
      var unis = await Uni.find({
        name: new RegExp(".*" + props.uniName + ".*", "i"),
        tuition: { $gte: props.minTuition, $lte: props.maxTuition },
      })
        .skip((curPage - 1) * perPage)
        .limit(perPage);
    } else {
      var unis = await Uni.find({
        name: new RegExp(".*" + props.uniName + ".*", "i"),
      })
        .skip((curPage - 1) * perPage)
        .limit(perPage);
    }

    var totalUnis = await getTotalUnis(props);
    
    return { unis, totalUnis, maxPage: Math.ceil(totalUnis / perPage) };
}