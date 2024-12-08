import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContext } from '../AuthProvider';
import { use } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { PropagateLoader } from 'react-spinners';

function MyCampaigns() {
  const { user } = React.useContext(authContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/campaigns/by/email/${user?.email}/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Do you want to Delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/campaigns/${id}`, {
          method: 'DELETE',
        })
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else if (result.isDenied) {
        Swal.fire('Campaign not deleted', '', 'info');
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <PropagateLoader color='#de9b00' size={25} />
        </div>
      ) : (
        <div className='text-center my-10 min-h-screen'>
          <h1 className='text-5xl font-extrabold'>My Campaigns</h1>
          <p>
            Raise funds for personal needs, creative ideas, or innovative
            startups with a community that believes in you
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
                          <button
                            onClick={() => handleDelete(data._id)}
                            className='btn bg-hive rounded-full px-5 btn-sm'>
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
      )}
    </>
  );
}

export default MyCampaigns;
