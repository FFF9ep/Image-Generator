import userModel from "../Models/UserModel";


export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        const user = await userModel.findById(userId);

        if (!user || !prompt) {
            return res.json({success: false, message: 'Missing Details!'})
        }

        if (user.creditBalance === 0 || userModel.creditBalance < 0) {
            return res.json({success: false, message: 'You have no credits left!', creditBalance: user.creditBalance})
        }

        

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}
