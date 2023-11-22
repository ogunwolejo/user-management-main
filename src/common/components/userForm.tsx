import React, { FC, memo, useState } from 'react';
import { ICreateUser } from '../../global/interface/users.interface';
import Loader from '../loader';
import { Oval } from 'react-loader-spinner';

const UserForm:FC<{lastId:number; handler:any; loading?:boolean}> = memo(({lastId, handler, loading}) => {
  const [formData, setFormData] = useState<ICreateUser>({
    id:lastId + 1,
    username: '',
    email: '',
    name: '',
    phoneNumber: '',
    address: '',
    website:''
  });

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    await handler(formData)
    reset()
  };

  const reset = () => {
    setFormData({
      id:lastId + 1,
      username: '',
      email: '',
      name: '',
      phoneNumber: '',
      address: '',
      website:''
    })
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-md shadow-lg border-2 border-blue-800">
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600">
            Fullname
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData((c:any) => ({...c, name:e.target.value}))}
            className="w-full mt-1 py-3 outline-blue-800 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData((c:any) => ({...c, email:e.target.value}))}
            className="w-full mt-1 py-3 p-2 border outline-blue-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData((c:any) => ({...c, username:e.target.value}))}
            className="w-full mt-1 py-3 p-2 border rounded-md outline-blue-800"
            required
          />
        </div>
        <div className="mb-4 flex flex-row items-center justify-between">
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-600 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData((c:any) => ({...c, phoneNumber:e.target.value}))}
              className="w-full mt-1 p-2 py-3 border rounded-md outline-blue-800"
              required
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-gray-600 text-sm">
                Website
              </label>
              <input
                type="tel"
                id="website"
                name="phoneNumbwebsiteer"
                value={formData.website}
                onChange={(e) => setFormData((c:any) => ({...c, website:e.target.value}))}
                className="w-full mt-1 p-2 py-3 border rounded-md outline-blue-800"
                required
              />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600 text-sm">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData((c:any) => ({...c, address:e.target.value}))}
            className="w-full mt-1 p-2 border rounded-md outline-blue-800"
            required
          ></textarea>
        </div>
        
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center justify-center shadow-lg border border-blue-800 rounded h-8 w-8'>
              <p className='text-sm text-blue-800'>{lastId+1}</p>
            </div>
          </div>
          <div>
            <div className="w-100 flex justify-end">
              {!loading ? <button type="submit" className="py-4 px-4 bg-blue-700 border-0 hover:ring-offset-2 hover:ring-2 focus:ring-2 hover:ring-blue-800 focus:ring-blue-800 gap-2 rounded-md shadow-sm flex justify-between items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="stroke-2 w-4 h-4 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                <span className="text-white text-sm uppercase text-bold">Add User</span>
              </button>
              : (
                <Oval
                  height={20}
                  width={20}
                  color={"blue"}
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor={"blue"}
                  strokeWidth={5}
                  strokeWidthSecondary={5}

                />
              )
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default UserForm;
