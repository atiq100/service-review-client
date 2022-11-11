import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.servicename.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;

    const service = {
      title: serviceName,
      price,
      description,
      img: image,
    };
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="p-6  dark:text-gray-50">
        <form
          onSubmit={handleAddService}
          novalidate=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="servicename" className="text-sm">
                  Service Name
                </label>
                <input
                  type="text"
                  name="servicename"
                  placeholder="Service Name"
                  className="w-full h-10 p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="100.00"
                  className="w-full h-10 p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="image" className="text-sm">
                  Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image Link"
                  className="w-full h-10 p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="Description" className="text-sm">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Description"
                  className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="px-4 py-2 border rounded-md dark:border-gray-100"
                >
                  submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
