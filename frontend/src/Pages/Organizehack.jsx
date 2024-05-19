import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Organizehack = () => {
  const [formData, setFormData] = useState({
    name: '',
    cover_image: null,
    about: '',
    email: '',
    themes:[],
    min_team: '',
    max_team: '',
    venue: '',
    website: '',
    application_open: '',
    application_close: '',
    hackathon_starts: '', 
    hackathon_ends: '',
    prize_pool: '',
  });
  const [themes, setthemes] = useState([
    "Fintech",
    "AI / ML",
    "Open innovation",
    "IOT",
    "Education",
    "VR / AR",
    "Blockchain",
  ]);
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            [name]: [...prevData[name], value]
          };
        } else {
          return {
            ...prevData,
            [name]: prevData[name].filter((theme) => theme !== value)
          };
        }
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Example: Sending formData to backend
    fetch('http://localhost:3000/upload_hackathon', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from backend
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        <form action="/upload_hackathon" method="post" className="flex gap-6 flex-col mt-4 w-1/2 ml-12" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              Name
            </label>
            <input onChange={handleChange}
              type="text" name="name"
              placeholder="name of your hackathon"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              cover image
            </label>
            <input onChange={handleChange} type="file" className="rounded-md p-4 border-purple-500" name="cover_image"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              about
            </label>
            <textarea onChange={handleChange} name="about"
              placeholder="about your hackathon"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500 h-36"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              email
            </label>
            <input onChange={handleChange}
              type="email" name="email"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hackathon-name" className="uppercase font-bold">
              themes
            </label>
            <div className="flex flex-wrap gap-4 mt-4">
              {themes.map((theme) => {
                return (
                  <div key={theme} className="relative  flex justify-center items-center ">
                    <input onChange={handleChange}
                      type="checkbox" name="themes" value={theme}
                      className="peer opacity-0 cursor-pointer absolute top-0 left-0 h-full w-full"
                    />
                    <div className=" bg-purple-100 peer-checked:bg-purple-400  px-8 py-3 rounded-full flex justify-center items-center border-2 border-purple-400">
                      <span>{theme}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-32 mt-4">
            <div className="flex flex-col">
              <label htmlFor="" className="uppercase font-bold">
                Min-team size
              </label>
              <input onChange={handleChange} name="min_team"
                type="number"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="uppercase font-bold">
                Max-team size
              </label>

              <input onChange={handleChange} name="max_team"
                type="number"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              Venue
            </label>
            <input onChange={handleChange} name="venue"
              type="text"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              Website
            </label>
            <input onChange={handleChange}
              type="text" name="website"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="" className="uppercase font-bold">
              Application opens
            </label>

              <input onChange={handleChange}
                type="datetime-local" name="application_open"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="uppercase font-bold">
              Application closes
            </label>
              <input onChange={handleChange} name="application_close"
                type="datetime-local"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />

          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="uppercase font-bold">
              Hackathon starts
            </label>
              <input onChange={handleChange} name="hackathon_starts"
                type="datetime-local"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />

          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="uppercase font-bold">
              Hackathon ends
            </label>
              <input onChange={handleChange}
                type="datetime-local" name="hackathon_ends"
                className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
              />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hackathon-name" className="uppercase font-bold ">
              Prize pool <span className=" font-normal">(in USD)</span>
            </label>
            <input onChange={handleChange}
              type="number" name="prize_pool"
              className="rounded-md p-4 focus:ring-purple-500 focus:ring-2 border-purple-500"
            />
          </div>

          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Final submit"
              className="px-6 py-4 bg-purple-400 text-white rounded-full w-1/2 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Organizehack;
