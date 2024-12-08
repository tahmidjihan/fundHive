import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { PropagateLoader } from 'react-spinners';

function Campaigns() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  });
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/campaigns')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleSortData = () => {
    const sortedData = [...data].sort((a, b) => a.minDonation - b.minDonation);
    setData(sortedData);
    console.log(data);
  };
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <PropagateLoader color='#de9b00' size={25} />
        </div>
      ) : (
        <div className='min-h-screen'>
          <div className='text-center my-10'>
            <h1 className='text-5xl font-extrabold'>Campaigns</h1>
            <p>
              Raise funds for personal needs, creative ideas, or innovative
              startups with a community that believes in you
            </p>
            <button
              onClick={handleSortData}
              className='btn mt-4 bg-hive text-black hover:bg-hive font-bold mb-4 rounded-full px-10'>
              Sort by price
            </button>
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
                    <th>Min Amount</th>
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
                        <td>{data.minDonation}</td>
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
      )}
    </>
  );
}

export default Campaigns;
