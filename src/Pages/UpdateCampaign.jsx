import React, { useEffect } from 'react';
import Campaign from './Campaign';
import { authContext } from '../AuthProvider';
import { toast } from 'react-toastify';
import { use } from 'react';
import { useNavigate, useParams } from 'react-router';

function UpdateCampaign(props) {
  const { user } = React.useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      navigate('/login');
    }
  }, []);
  const { isUpdate } = props;
  const params = useParams();
  const [data, setData] = React.useState([]);

  if (isUpdate) {
    useEffect(() => {
      fetch(`http://localhost:3000/api/campaigns/${params.id}`)
        .then((res) => res.json())
        .then((data) => setData(data[0]));
    }, []);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = {
      email: formdata.get('email'),
      name: formdata.get('name'),
      title: formdata.get('title'),
      date: new Date().toISOString().split('T')[0],
      contentType: formdata.get('contentType'),
      phone: formdata.get('phone'),
      minDonation: formdata.get('minDonation'),
      thumbnail: formdata.get('thumbnail'),
      deadline: formdata.get('deadline'),
      goalAmount: formdata.get('goalAmount'),
      description: formdata.get('description'),
    };
    if (isUpdate) {
      fetch(`http://localhost:3000/api/campaigns/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => toast.success('Task successful'))
        .catch(() => toast.error('Task failed'));
    } else {
      fetch(`http://localhost:3000/api/campaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => toast.success('Task successful'))
        .catch(() => toast.error('Task failed'));
    }
    e.target.reset();
  };
  return (
    <>
      <div className='min-h-screen '>
        <div className='flex align-middle w-9/12 mx-auto flex-col-reverse lg:flex-row gap-20 justify-around'>
          <div className='text-start my-10'>
            <h1 className='text-5xl font-extrabold'>
              {isUpdate ? 'Update Campaign' : 'Create a Campaign'}
            </h1>
            <p className='max-w-md'>
              Donate on people need, creative ideas, or innovative startups with
              a community that believes in you. Donation can help someone
              overcome challenges, bring innovative ideas to life, or support a
              dream that might otherwise remain unfulfilled.
            </p>
            <form onSubmit={handleUpdate} className='flex flex-col gap-4 mt-10'>
              <input
                type='email'
                placeholder='Enter email'
                name='email'
                readOnly
                defaultValue={user?.email}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Name'
                name='name'
                readOnly
                defaultValue={user?.displayName}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Title'
                defaultValue={data?.title}
                name='title'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <select
                name='contentType'
                value={data?.contentType}
                required
                className='select select-bordered w-full max-w-xs'>
                <option value='Personal Causes'>Personal Causes</option>
                <option value='Community Causes'>Community Causes</option>
                <option value='Global Causes'>Global Causes</option>
                <option value='Business and Innovation'>
                  Business and Innovation
                </option>
                <option value='Advocacy and Awareness'>
                  Advocacy and Awareness
                </option>
                <option value='Charity'>Charity</option>
                <option value='Other'>Other</option>
              </select>

              <input
                type='number'
                placeholder='Enter Phone Number'
                defaultValue={data?.phone}
                name='phone'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                placeholder='Enter Minimum Donation'
                name='minDonation'
                defaultValue={data?.minDonation}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Thumbnail URL'
                name='thumbnail'
                defaultValue={data?.thumbnail}
                className='input input-bordered w-full max-w-xs'
                required
              />

              <input
                type='number'
                placeholder='Enter Goal Amount'
                name='goalAmount'
                defaultValue={data?.goalAmount}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Deadline : YYYY/MM/DD'
                name='deadline'
                defaultValue={data?.deadline}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <textarea
                className='textarea textarea-bordered h-24 w-full max-w-xs'
                cols='30'
                defaultValue={data?.description}
                rows='10'
                name='description'
                placeholder='Description'></textarea>
              <button className='btn bg-hive rounded-lg max-w-xs' type='submit'>
                {isUpdate ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
          <div>
            <img
              src={
                isUpdate
                  ? 'https://i.ibb.co.com/djsJxRx/update.png'
                  : 'https://i.ibb.co.com/wMcrHHk/campaign.png'
              }
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCampaign;
