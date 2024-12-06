import React from 'react';
import { Link } from 'react-router';

function MyCampaigns() {
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
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton's hospital</td>
                  <td>10/12/2024</td>
                  <td>12/31/2024</td>
                  <td>$100,000</td>
                  <td>
                    <button className='btn bg-hive rounded-full px-5 btn-sm'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className='btn bg-hive rounded-full px-5 btn-sm'>
                      Delete
                    </button>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>1</th>
                  <td>Alexy Kesegin Art Project</td>
                  <td>10/12/2024</td>
                  <td>12/31/2024</td>
                  <td>$100,000</td>
                  <td>
                    <button className='btn bg-hive rounded-full px-5 btn-sm'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className='btn bg-hive rounded-full px-5 btn-sm'>
                      Delete
                    </button>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>1</th>
                  <td>Simon Dring's parents fund</td>
                  <td>10/12/2024</td>
                  <td>12/31/2024</td>
                  <td>$100,000</td>
                  <td>
                    <Link
                      to={'/UpdateCampaign'}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCampaigns;
