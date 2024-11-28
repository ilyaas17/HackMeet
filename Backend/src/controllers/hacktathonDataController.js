import hackathonModel from "../models/hackathonModel";


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
