const Vessels = require('../../models/vessels');
const Account = require('../../models/account')

module.exports = {
  get,
  show,
  create,
  edit,
  update,
  delete: deleteVessel,
  confirm: confirmDeleteVessel
};

async function get(req, res) {
    console.log("GETTING VESSELS ...")
  const acct = await Account.findOne({email: req.user.email})
    console.log("account is ", acct)
  const vessels = await Vessels.find({account: acct._id});
    console.log("found this many vessels", vessels.length)
  if (vessels) {
        res.json(vessels)
  } else { return null}
}

async function create(req, res) {
  try {
    console.log("CREATING VESSEL...", req.body)
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

async function show(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  console.log("Vessel param id")
  console.log(req.params.id)
  res.render('vessels/show', { title: 'Vessel Information', vessel});
}

async function update(req, res) {
  const vessel = await Vessels.findById(req.params.id);

  vessel.name = req.body.vessel;
  try {
   await vessel.save(vessel);
    res.redirect(`/vessels/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}

async function edit(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  res.render('vessels/edit', {
    title: 'Edit Vessel',
    vessel
  });
}

async function confirmDeleteVessel(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  res.render('vessels/delete', {
    title: 'Confirm Vessel Deletion',
    vessel
  });
}

async function deleteVessel (req,res){

  console.log(req.params.id)
  await Vessels.deleteOne({_id: req.params.id})
  .then(console.log("delete success!"))
  //.catch(console.log("delete err!"));

  const vessels = await Vessels.find({email: req.user.email});
  res.render('vessels/index', { title: 'Your vessels', vessels });
}

