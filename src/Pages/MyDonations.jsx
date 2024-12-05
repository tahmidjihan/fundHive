import React from 'react';

function MyDonations() {
  return (
    <>
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
                  <th>Name</th>
                  <th>Donated</th>
                  <th>See More</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>$20</td>
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
                  <td>$32</td>
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
                  <td>$15</td>
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

export default MyDonations;
