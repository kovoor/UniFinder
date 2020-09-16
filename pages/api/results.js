import dbConnect from '../../utils/dbConnect'
import Uni from '../../data/models/Uni'

dbConnect()

const handler = async (req, res) => {

  const { method } = req
  
  switch (method) {
    case 'GET':
      try {
        const unis = await Uni.find({})
        // console.log(unis)
        res.status(200).json(unis)
      } catch (error) {
        res.status(400).json('Catch an error: ', error)
      }
      break

    case 'POST':
        try {
          const uni = await Uni.create(req.body)
          res.status(201).json({ success: true, data: uni })
        } catch (error) {
          res.status(400).json('Catch an error: ', error)
        }
        break

      default:
        res.status(400).json('Catch an error')
        break
  }
}

export default handler