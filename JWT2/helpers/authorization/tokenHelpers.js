const sendJwtToClient = (user,res) => {
  // Generate JWT

  const token = user.generateJwtFromUser();

  const { JWT_COOKIE } = process.env;

  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
      secure: false,
    })

    .json({
      success: true,
      access_token: token,
      data: {
        username: user.username,
        email: user.email,
      },
    });
};


const getAccessTokenFromHeader = (req)=>{

  const authorization = req.headers.authorization;

  const access_token = authorization.split(" ")[1];

  return access_token;
}



export  {sendJwtToClient,getAccessTokenFromHeader};
