const Listing = require("../models/listing.js");
const geocodeLocation = require("../utils/geocode.js");

module.exports.index=async (req, res) => {
    let { search, category } = req.query;
    let query = {};
    let filters = [];

    if(search){
      let searchRegex = new RegExp(search, "i");
      filters.push({
        $or: [
          { title: searchRegex },
          { location: searchRegex },
          { country: searchRegex },
        ],
      });
    }

    const categoryFilters = {
      trending: ["popular", "luxury", "premium", "villa", "resort"],
      room: ["room", "apartment", "studio", "guest house"],
      "iconic-cities": ["city", "old town", "mumbai", "delhi", "jaipur", "udaipur", "bengaluru"],
      mountains: ["mountain", "valley", "cabin", "manali", "shimla", "nainital", "dharamshala"],
      castle: ["castle", "haveli", "heritage"],
      pools: ["pool", "villa", "resort"],
      camping: ["camp", "tent", "desert", "jaisalmer"],
      farms: ["farm", "countryside"],
      arctic: ["snow", "ski", "cold"],
    };

    if(category && categoryFilters[category]){
      let categoryRegex = new RegExp(categoryFilters[category].join("|"), "i");
      filters.push({
        $or: [
          { title: categoryRegex },
          { description: categoryRegex },
          { location: categoryRegex },
          { country: categoryRegex },
        ],
      });
    }

    if(filters.length > 0){
      query = { $and: filters };
    }

    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { allListings, search, category });
};

module.exports.renderNewForm=( req, res) => {
    res.render("listings/new.ejs");
  }

  module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
       path :"reviews",
       populate :{
       path: "author",
     },
})
    .populate("owner");
    if(!listing){
     req.flash("error","listing you requested for doesnot exist");
     return res.redirect("/listings")
    }
    const coordinates = listing.geometry && listing.geometry.coordinates;
    const mapCoordinates =
      Array.isArray(coordinates) && coordinates.length === 2 ? coordinates : null;

    res.render("listings/show.ejs", { listing, mapCoordinates });
  }

  module.exports.createListing=async (req, res, next) => {
   const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    if(req.file){
      let url= req.file.path;
      let filename=req.file.filename;
      newListing.image= {url,filename};
    }
    const geometry = await geocodeLocation(
      newListing.location,
      newListing.country
    );
    if(geometry){
      newListing.geometry = geometry;
    }
   await newListing.save();
    req.flash("success","new listing created");
    res.redirect("/listings");
  }
  module.exports.renderEditForm=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error","listing you requested for doesnot exist");
      return res.redirect("/listings");
     }
     res.render("listings/edit.ejs", { listing });
    
  }

  module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, {new:true});
if( typeof req.file !="undefined"){
    let url= req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
}
    const geometry = await geocodeLocation(listing.location, listing.country);
    if(geometry){
      listing.geometry = geometry;
    }
    await listing.save();
    req.flash("success","listing updated");
    res.redirect(`/listings/${id}`);
  }

  module.exports.destroyListing=async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete({ _id: id });
    req.flash("success"," listing deleted");
    res.redirect(`/listings`);
  }
