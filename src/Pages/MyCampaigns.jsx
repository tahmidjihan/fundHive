import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContext } from '../AuthProvider';
import { use } from 'react';

function MyCampaigns() {
  const { user } = React.useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      navigate('/login');
    }
  }, []);

  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/campaigns/by/email/${user?.email}/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <>
      <div className='text-center my-10 min-h-screen'>
        <h1 className='text-5xl font-extrabold'>My Campaigns</h1>
        <p>
          Raise funds for personal needs, creative ideas, or innovative startups
          with a community that believes in you
        </p>
        <div>
          <div className='overflow-x-auto'>
            <table className='table lg:w-9/12 mx-auto'>
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Deadline</th>
                  <th>Goal</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => {
                  return (
                    <tr key={data._id}>
                      <th>{i + 1}</th>
                      <td>{data.title}</td>
                      <td>{data.date}</td>
                      <td>{data.deadline}</td>
                      <td>${data.goalAmount}</td>
                      <td>
                        <Link
                          to={`/UpdateCampaign/${data._id}`}
                          className='btn bg-hive rounded-full px-5 btn-sm'>
                          Update
                        </Link>
                      </td>
                      <td>
                        <button className='btn bg-hive rounded-full px-5 btn-sm'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCampaigns;
