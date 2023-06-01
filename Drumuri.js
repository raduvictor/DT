import Drum from "./DrumModel.js";

export const getAllRoads = async (req, res) => {
    try {
        const roads = await Drum.findAll();
        res.json(roads);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateRoad = async (req, res) => {
    try {
        await Drum.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
