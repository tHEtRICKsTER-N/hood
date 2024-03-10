import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        // add { _id: { $ne: loggedInUserId } } to filter all users expect the logged in users, this 
        // way we can send messages to ourselves. -password will give users without their password(for security)

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log('Error in getUsersForSidebar', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}