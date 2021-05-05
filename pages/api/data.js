import getUnis from '../../database/getUnis'

export default async function data(req, res) {
    const unis = await getUnis(req.query)
    res.json(unis);
}