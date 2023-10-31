import React from 'react';
import '../screens/Welcome';
import '../screens/welcome.css';
function Welcome() {
  return (
    <div className="cms-dashboard">
      <nav className="cms-sidebar">
        <div className="sidebar-profile">
          <div className="profile-circle">S</div>
          <div className="profile-info">
            <div className="profile-name">Sarah</div>
            <div className="profile-contacts">0123456789</div>
            <div className="profile-email">example@gmail.com</div>
          </div>
        </div>
        <ul className="sidebar-links">
          <li><span className="star-label">★</span> <a href="#">Dashboard</a></li>
          <li><span className="star-label">★</span><a href="#">Users</a></li>
          <li><span className="star-label">★</span><a href="#">Businesses</a></li>
        </ul>
      </nav>
      <main className="cms-content">
        <header className="cms-header">
          <h1>Welcome to AMS</h1>
        </header>
        <div className='main'>
          <div className='main-title'>
            Dashboard
          </div>
          <div className='main-table-container'>
          <table className='main-table'>
            <thread>
                <tr>
                    <th>Sales</th>
                    <th>New Businesses</th>
                    <th>New Users</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td>300</td>
                    <td>300</td>
                    <td>300</td>
                </tr>
            </tbody>
          </table>
          </div>
          <div className='main-title'>
            Dashboard
          </div>
          <div className="table-container">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>0123456789</td>
                  <td>example@gmail.com</td>
                  <td>1235 Vilakazi...</td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>0123456789</td>
                  <td>example@gmail.com</td>
                  <td>1235 Vilakazi...</td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>0123456789</td>
                  <td>example@gmail.com</td>
                  <td>1235 Vilakazi...</td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>0123456789</td>
                  <td>example@gmail.com</td>
                  <td>1235 Vilakazi...</td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>0123456789</td>
                  <td>example@gmail.com</td>
                  <td>1235 Vilakazi...</td>
                </tr>
              </tbody>
            </table>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Business Name </th>
                  <th>Reg Number</th>
                  <th>Type of Buiness</th>
                  <th>Industry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tech Logistics</td>
                  <td>N/A</td>
                  <td>Township</td>
                  <td>Technology</td>
                </tr>
                <tr>
                  <td>Tech Logistics</td>
                  <td>N/A</td>
                  <td>Township</td>
                  <td>Technology</td>
                </tr>
                <tr>
                  <td>Tech Logistics</td>
                  <td>N/A</td>
                  <td>Township</td>
                  <td>Technology</td>
                </tr>
                <tr>
                  <td>Tech Logistics</td>
                  <td>N/A</td>
                  <td>Township</td>
                  <td>Technology</td>
                </tr>
                <tr>
                  <td>Tech Logistics</td>
                  <td>N/A</td>
                  <td>Township</td>
                  <td>Technology</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Welcome;