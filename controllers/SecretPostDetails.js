const SecretPost = require("../models/SecretPost");

exports.createPost = async (req, res) => {
    try {

      // Destructure fields from the request body
      const {title,content, email} = req.body;

      // Check if All Details are there or not
      if ( !title || !content || !email ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }

       // Check if post already exists
    const existingPost = await SecretPost.findOne({ email })
    if (existingPost) {
      return res.status(200).json({
        success: true,
        message: "Sorry, only one allowed(Secret post by admin)",
      })
    }
  
  
      const secretPost = await SecretPost.create({ title, content,email});
  
      return res.status(200).json({
        success: true,
        secretPost,
        message: "SecretPost create successfully",
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please try again.",
      })
    }
  }

  //getAllPost
exports.getAllPost = async (req, res) => {
    try{      
         const getAllPost = await SecretPost.find({});

          return res.status(200).json({
                success:true,
                message:"All post fetched successfully",
                data:getAllPost,
           });
    }   
    catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}

  //getPost
exports.getPost = async (req, res) => {
    try{      
        let id = req.params.id;
        
        let secretPost = await SecretPost.findById(id);

        return res.status(200).json({
            success:true,
            message: "single post",
            data:secretPost
        });
    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}

  //deletePost
exports.deletePost = async (req, res) => {
    try{      
        let id = req.params.id;

        let secretPost = await SecretPost.findByIdAndDelete(id);

        return res.status(200).json({
            success:true,
            message: "post has been deleted",
            data:secretPost
        });
    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}

  //updatePost
exports.updatePost = async (req, res) => {
    try{      
        let id = req.params.id;
        let secretPost = await SecretPost.findById(id);

        let dataToBeUpdated = req.body;

        if(secretPost){

            for(key in dataToBeUpdated) {
                secretPost[key] = dataToBeUpdated[key];
            }
            const updatedPost = await secretPost.save();

            return res.status(200).json({
                success:true,
                 message: "post updated succesfully",
                data:updatedPost
            });

        }else{

            return res.status(404).json({
                success:false,
                message: "post not found",
            });
        }


    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}
