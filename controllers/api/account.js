const Account = require('../../models/account');
const User = require('../../models/user')

module.exports = {
  get,
  create,
  update
};


async function update(req,res) {
  let acct = await Account.findOne({email: req.user.email})

  if (acct !== null) {
    acct.acctStatus = 1
    acct.firstName = req.body.firstName
    acct.middleName =req.body.middleName
    acct.lastName = req.body.lastName
    acct.countryCode = req.body.countryCode
    acct.phone = req.body.phone
  }

  try { 
    await acct.save()
    res.json(acct)
  } catch (err) {
      console.log("FAILED TO UPDATE ACCOUNT")
  }
}

function generateAcctNumber() {
  return 01234567
}

async function create(req,res) {
  console.log("*&*&*&* CREATING ACCOUNT ")
  const user = await User.findOne({email: req.user.email})
  let acct = new Account;

  acct.acctStatus = 0  //associated but incomplete since this is at creation time
  acct.userId = user.name;
  acct.actNumber = generateAcctNumber();
  acct.firstName = ""
  acct.middleNameInitial=""
  acct.lastName=""
  acct.email=req.user.email
  acct.countryCode=null
  acct.phone=null
  acct.yguser=user._id
  try { 
    const result =  await Account.create(acct);
  } catch (err) {
      console.log("FAILED TO CREATE ACCOUNT")
  }
}

async function get(req,res) {
  console.log("*&*&*&* GETTING ACCOUNT ")
  if (!req.user) {return undefined}
  const acct = await Account.findOne({email: req.user.email})
  console.log("acct findone result is ....", acct)

  if (!acct) { 
    //if one does not exist for that user return null
    return null
  } 
  res.json(acct); //in all cases return the created or existing account with the proper status 1 or 0
}