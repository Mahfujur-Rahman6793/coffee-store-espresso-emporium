import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffecard = ({ coffeedetails }) => {
  const {
    _id,
    coffee,
    quantity,
    supplier,
    taste,
    category,
    details,
    photourl,
  } = coffeedetails;
  //   const coffeeDetails = useLoaderData();
  //   const [remaingcoffee,setRemainingCoffee] = useState(coffeeDetails);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            // const filterData = remaingcoffee.filter((item)=>item._id !== _id);
            // setRemainingCoffee(filterData);
          });
      }
    });
  };
  return (
    <div className="flex border-2  justify-center  card card-side bg-base-100 shadow-xl">
      <div className="flex justify-center items-center ms-4">
        <figure className="">
          <img src={photourl} alt="Coffee" />
        </figure>
      </div>
      <div className="flex justify-between items-center ms-4 w-full pr-4">
        <div>
          <h2 className="card-title">{coffee}</h2>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-4 p-3">
          <button className="btn bg-green-300">View</button>
          <Link to={`/updatecoffe/${_id}`}>
            <button className="btn bg-yellow-400 ">Edit</button>
          </Link>
          <button className="btn bg-red-500" onClick={() => handleDelete(_id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffecard;
