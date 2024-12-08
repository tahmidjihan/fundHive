import React, { useEffect } from 'react';
import { Link } from 'react-router';

function Campaigns() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/campaigns')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className='min-h-screen'>
        <div className='text-center my-10'>
          <h1 className='text-5xl font-extrabold'>Campaigns</h1>
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
                  <th>Name</th>
                  <th>Deadline</th>
                  <th>See More</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => {
                  return (
                    <tr key={data._id}>
                      <th>{i + 1}</th>
                      <td>{data.title}</td>
                      <td>{data.deadline}</td>
                      <td>
                        <Link
                          to={`/campaign/${data._id}`}
                          className='btn btn-sm bg-hive font-bold'>
                          See More
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
    </>
  );
}

export default Campaigns;
