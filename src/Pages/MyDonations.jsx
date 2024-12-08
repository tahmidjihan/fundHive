import React, { useEffect, useState } from 'react';
import { authContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router';
import { PropagateLoader } from 'react-spinners';

function MyDonations() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { user } = React.useContext(authContext);
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      navigate('/login');
      return;
    }
    fetch(`http://localhost:3000/api/donations/by/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user, navigate]);
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <PropagateLoader color='#de9b00' size={25} />
        </div>
      ) : (
        <div className='min-h-screen'>
          <div className='text-center my-10'>
            <h1 className='text-5xl font-extrabold'>Donation donated By me</h1>
            <p>
              Raise funds for personal needs, creative ideas, or innovative
              startups with a community that believes in you
            </p>
          </div>
          <div>
            <div className='overflow-x-auto  lg:w-8/12 mx-auto'>
              <table className='table'>
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Donated</th>
                    <th>See More</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <th>{i + 1}</th>
                        <td>{item.details.title}</td>
                        <td>{item.details.amount}</td>
                        <td>
                          <Link
                            to={`/campaign/${item._id}`}
                            className='btn text-black bg-hive btn-sm'>
                            see more
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyDonations;
