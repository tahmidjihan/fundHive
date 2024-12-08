import React, { useEffect } from 'react';
import { authContext } from '../AuthProvider';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

function Campaign() {
  const { user } = React.useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  const camp = useParams();
  const { id } = camp;
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/campaigns/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);
  console.log(data);
  function handleDonation(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const postData = {
      email: formdata.get('email'),
      name: formdata.get('name'),
      details: {
        title: data?.title,
        phone: formdata.get('phone'),
        amount: formdata.get('amount'),
        id: data?._id,
      },
    };
    fetch(`http://localhost:3000/api/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(() => toast.success('Task successful'))
      .catch(() => toast.error('Task failed'));
    console.log(data);
  }
  return (
    <>
      <div className='min-h-screen ' key={data._id}>
        <div className='flex align-middle w-9/12 mx-auto flex-col-reverse lg:flex-row gap-20 justify-around'>
          <div className='text-start my-10'>
            <h1 className='text-5xl font-extrabold'>Donate Now!</h1>
            <p className='max-w-md'>
              Donate on people need, creative ideas, or innovative startups with
              a community that believes in you. Donation can help someone
              overcome challenges, bring innovative ideas to life, or support a
              dream that might otherwise remain unfulfilled.
            </p>
            <form
              action=''
              className='flex flex-col gap-4 mt-10'
              onSubmit={handleDonation}>
              <input
                type='email'
                placeholder='Enter email'
                name='email'
                className='input input-bordered w-full max-w-xs'
                defaultValue={user?.email}
                readOnly
                required
              />
              <input
                type='text'
                placeholder='Enter name'
                name='name'
                className='input input-bordered w-full max-w-xs'
                defaultValue={user?.displayName}
                readOnly
                required
              />
              <input
                type='number'
                placeholder='Enter Phone Number'
                name='phone'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                name='amount'
                placeholder='Enter amount'
                className='input input-bordered w-full max-w-xs'
                required
              />

              <button className='btn bg-hive rounded-lg max-w-xs' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <div className='py-10'>
            <img
              src={data?.thumbnail}
              alt=''
              className='w-auto md:h-96 rounded-xl mb-5'
            />
            <h1 className='text-3xl font-extrabold'>{data?.title}</h1>
            <p>{data?.description}</p>
            <h2 className='text-xl font-bold'>Goal:$ {data?.goalAmount}</h2>
            <p>Please donate at least ${data?.minDonation}</p>
            <h2 className='text-xl font-bold'>Deadline: {data?.deadline}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign;
