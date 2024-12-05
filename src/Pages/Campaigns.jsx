import React from 'react';

function Campaigns() {
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
                  <th>Job</th>
                  <th>See More</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <button className='btn text-black bg-hive btn-sm'>
                      see more
                    </button>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>
                    <button className='btn text-black bg-hive btn-sm'>
                      see more
                    </button>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>
                    <button className='btn text-black bg-hive btn-sm'>
                      see more
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaigns;
