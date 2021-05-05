import dbConnect from "../utils/dbConnect";
import Uni from "../data/models/Uni";

export default async function getTuition(props) {
    await dbConnect(); 

    var tuition = await Uni.find({
        name: new RegExp(".*" + props.uniName + ".*", "i"),
    });

    tuition = tuition.map((a) => a.tuition);

    return tuition;
}



