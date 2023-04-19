import Layout from "./Layout";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";
import { useState } from "react";
import './style/style.css';

const Home = () => {

  const [mockEmployees, setMockEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
  ]);

  const handleSave = (employee) => {
    const lastId = Math.max(...mockEmployees.map((ele) => ele.id));
    const newEmployee = { id: lastId + 1, ...employee };
    const newEmployees = [...mockEmployees, newEmployee];
    setMockEmployees(newEmployees);
  };

  const handleDelete = (id) => {
    const filterEmployees = mockEmployees.filter((employee) => employee.id !== id);
    setMockEmployees(filterEmployees);
  };

  const [sector, setSector] = useState("other");


  return (
    <div>
      <Layout>
        <div className="container">
          <div >
            {sector === 'other' && <h1>Generation Thailand<br />React - Assessment</h1>}
            {sector === 'user' && <h1>Generation Thailand<br />User - Sector</h1>}
            {sector === 'admin' && <h1>Generation Thailand<br />Admin - Sector</h1>}
          </div>
          <div className="group-btn">
            <button onClick={() => setSector('user')}>User Home Section</button>
            <button onClick={() => setSector('admin')}>Admin Home Section</button>
          </div>
          <div>
            {sector === 'user' && <HomeUser mockEmployees={mockEmployees} />}
            {sector === 'admin' && <HomeAdmin mockEmployees={mockEmployees} handleSave={handleSave} handleDelete={handleDelete} />}
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default Home;