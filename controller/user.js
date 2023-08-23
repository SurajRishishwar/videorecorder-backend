module.exports.user = (req, res) => {
    
    res.status(200).send({
        id: req.userId,
      });
};