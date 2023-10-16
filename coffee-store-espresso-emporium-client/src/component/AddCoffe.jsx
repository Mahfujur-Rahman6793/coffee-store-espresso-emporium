import React from "react";

const AddCoffe = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;

        const newCoffee = {
            coffee, quantity, supplier, taste, category, details, photourl
        };
        console.log(newCoffee);

    }
  return (
    <div className="bg-[#F4F3F0] md:p-24">
      <h2 className="text-3xl text-center font-extrabold mb-4">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quentity row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 me-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>Coffee</span>
              <input
                type="text"
                name="coffee"
                placeholder="Coffee Name"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2  ms-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste  row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 me-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Coffee Supplier"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ms-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Coffee Taste"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category and Details row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 me-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Coffee Category"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ms-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="">
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <span>URL</span>
              <input
                type="text"
                name="photourl"
                placeholder="Coffee Category"
                className="input input-bordered  md:w-full"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-block">Add Coffee</button>
          
        </div>

      </form>
    </div>
  );
};

export default AddCoffe;
