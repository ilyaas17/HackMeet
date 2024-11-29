import hackathonModel from "../models/hackathonModel.js";
export const getHackathons = async (req, res) => {
    try {

        const hackathonsData = await hackathonModel.find();
        if (hackathonsData.length === 0) {
            res.status(404).json({ message: "Hackathons Not Found . . . " })
        }
        res.status(200).json(hackathonsData);
    } catch (error) {
        res.status(500).json({ message1: error.message, message2: 'internal server error' })
    }
}


export const getHackathon = async (req, res) => {
    try{
        const {hackathonId} = req.params;
        const hackathonData = await hackathonModel.findById(hackathonId);

        if(!hackathonData){
            return res.status(400).send({
                data: hackathonData,
                message: "The Hackathon is not available."
            })
        }
        return res.status(200).send({
            data: hackathonData
        })
    } catch(error){
        return res.status(500).send({
            data: hackathonData,
            message: error.message
        })
    }
}
