const testUserControllers = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "test user data api",
    });
  } catch (error) {
    console.log("errorin test api", error);
  }
};

module.exports = {
  testUserControllers,
};
