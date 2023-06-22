import React, { useState } from "react";
import axios from "axios";


export default function AdminDashboard() {
 
  const [credentials, setcredentials] = useState({
    name: "",
    productID: "",
    image: "",
    productcode: ([""]),
    coversize: ([""]),
    maxpermissible: ([""]),
    minbreakingload: ([""]),
  });

  // const handleSubmit = async (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   await axios
  //     .post("http://localhost:8000/product/", {
  //       credentials,  
  //       headers: { 
  //         "Content-Type": "application/json",
  //       }
  //     })
  //     .then(() => {
  //       setcredentials({
  //         ...credentials,
  //         [event.target.name]: event.target.value,
  //       });
  //      
  //     });
  //   };
  //  
  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  const [name,setname]=useState([]);
  const [productid,setnaneitem]=useState([]);
  const loadData=async()=>{
    let response=await fetch('http://localhost:8000/product/',  {
    method:"POST",
  headers:{'Content-Type':'application/json'}
  });
  response=await response.json();
  console.log(response);
}
  return (
    <>
    
      <div>
        <h1>This is the Admin Dashboard Page</h1>

        <hr />
        <div>
          <form action='http://localhost:8000/product/' method="post" encType="multipart/form-data">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={credentials.name}
                onChange={onChange}
                autoComplete="given-name"
                required
              />
            </div>
            <div>
              <label htmlFor="productID">ProductID</label>
              <input
                type="text"
                name="productID"
                id="productID"
                value={credentials.productID}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                value={credentials.image}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="coversize">coversize </label>
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="coversize"
                name="coversize"
                value={credentials.coversize.push}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="maxpermissible">maxpermissible</label>
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="maxpermissible"
                name="maxpermissible"
                value={credentials.maxpermissible.push}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="minbreakingload">minbreakingload"</label>
              <input
                type="text"
                id="minbreakingload"
                name="minbreakingload"
                value={credentials.minbreakingload.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="minbreakingload"
                name="minbreakingload"
                value={credentials.minbreakingload.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="minbreakingload"
                name="minbreakingload"
                value={credentials.minbreakingload.push}
                onChange={onChange}
              />
              <input
                type="text"
                id="minbreakingload"
                name="minbreakingload"
                value={credentials.minbreakingload.push}
                onChange={onChange}
              /><input
              type="text"
              id="minbreakingload"
              name="minbreakingload"
              value={credentials.minbreakingload.push}
              onChange={onChange}
            />
            <input
            type="text"
            id="minbreakingload"
            name="minbreakingload"
            value={credentials.minbreakingload.push}
            onChange={onChange}
          />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <hr />
        <hr/>
        
        <hr/>
      </div>
    </>
  );
  }