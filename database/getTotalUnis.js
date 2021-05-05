import Uni from "../data/models/Uni";

export default async function getTotalUnis(props) {

    if(props.maxTuition & props.minTuition) {
      var totalUnis  = await Uni.find({
        name: new RegExp(".*" + props.uniName + ".*", "i"),
        tuition: { $gte: props.minTuition, $lte: props.maxTuition },
      }).countDocuments()
    }
      else {
      var totalUnis = await Uni.find({
        name: new RegExp(".*" + props.uniName + ".*", "i"),
      }).countDocuments()
    }

    return totalUnis;
}