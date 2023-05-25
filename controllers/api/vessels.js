const Vessels = require('../../models/vessels');
const Account = require('../../models/account')

module.exports = {
  get,
  create,
  update,
  delete: deleteVessel
};

async function get(req, res) {
  const acct = await Account.findOne({email: req.user.email})
  const vessels = await Vessels.find({account: acct._id});
  if (vessels) {
        res.json(vessels)
  } else { return null}
}

async function create(req, res) {
  try {
    //First add this vessel and then link it to the appropriate account 
    let acct = await Account.findOne({email: req.user.email})
    const vessel = await Vessels.create(req.body);
    
    vessel.account =  acct._id
    vessel.save();

    res.json(vessel)

  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}


async function update(req, res) {

  const vessel = await Vessels.findById(req.body._id);
  vessel.name = req.body.name;
  vessel.hullId= req.body.hullId;
  try {
   await vessel.save(vessel);
   res.json(vessel)
  } catch (err) {
    console.log(err);
    res.json({ title: " Something went wrong", errorMsg: err.message });
  }
}


async function deleteVessel(req,res){
  const vesselIdentifier = req.body
  await Vessels.deleteOne({_id: req.body.id})
  .then(console.log("completed deletion attempt!"))
  res.json({text: 'ok'})
}

