import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const data = [
    {
      name: "Darshil",
      age: 18,
      mobile: 7990179154,
      email: "darshil@gmail.com",
      gender: "Male",
      salary: 175000
    },
    {
      name: "Srushti",
      age: 19,
      mobile: 6536453165,
      email: "srushti@gmail.com",
      gender: "Female",
      salary: 100000
    },
    {
      name: "Divya",
      age: 18,
      mobile: 9879524005,
      email: "divya@gmail.com",
      gender: "Female",
      salary: 125000
    },
    {
      name: "Ravi",
      age: 35,
      mobile: 8917254545,
      email: "ravi@gmail.com",
      gender: "Male",
      salary: 57000
    },
    {
      name: "Harshita",
      age: 45,
      mobile: 5687105725,
      email: "harshita@gmail.com",
      gender: "Female",
      salary: 25000
    },
    {
      name: "Harsh",
      age: 25,
      mobile: 7896541456,
      email: "harsh@gmail.com",
      gender: "Male",
      salary: 19000
    },
    {
      name: "Palak",
      age: 33,
      mobile: 9764317894,
      email: "palak@gmail.com",
      gender: "Female",
      salary: 37000
    },
    {
      name: "Kenil",
      age: 45,
      mobile: 9876543210,
      email: "kenil@gmail.com",
      gender: "Male",
      salary: 9000
    },
    {
      name: "Krishna",
      age: 17,
      mobile: 9876548750,
      email: "krishna@gmail.com",
      gender: "Female",
      salary: 50000
    },
    {
      name: "Divyesh",
      age: 31,
      mobile: 9879594040,
      email: "divyesh@gmail.com",
      gender: "Male",
      salary: 55000
    }
  ]

  return (
    <div className="App">
      <div className='App-header'>
        <div>

          <h2>1. All Employee List Above 50K </h2>
          <div className='cen'>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile No.</th>
              <th>E-mail ID</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>

            {
              data.filter(data => data.salary > 50000).map(newdata => (
                // <h4>{newdata.name}'s  Salary = {newdata.salary}</h4>

                <tr>
                  <td>{newdata.name}</td>
                  <td>{newdata.age}</td>
                  <td>{newdata.mobile}</td>
                  <td>{newdata.email}</td>
                  <td>{newdata.gender}</td>
                  <td>{newdata.salary}</td>
                </tr>

              ))
            }
          </div>
          <h2>2. Employee list Only Female Name </h2>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile No.</th>
            <th>E-mail ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
          <div>
            {
              data.filter(gen => gen.gender == "Female").map(cost => (
                // <h4>{cost.name} = {cost.gender}</h4>

                <tr>
                  <td>{cost.name}</td>
                  <td>{cost.age}</td>
                  <td>{cost.mobile}</td>
                  <td>{cost.email}</td>
                  <td>{cost.gender}</td>
                  <td>{cost.salary}</td>
                </tr>

              ))
            }
          </div>
          <h2>3. Employee list Above Age is 30</h2>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile No.</th>
            <th>E-mail ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
          <div>
            {
              data.filter(item => item.age > 30).map(viwe => (
                // <h4>{viwe.name} = {viwe.age}</h4>
                <tr>
                  <td>{viwe.name}</td>
                  <td>{viwe.age}</td>
                  <td>{viwe.mobile}</td>
                  <td>{viwe.email}</td>
                  <td>{viwe.gender}</td>
                  <td>{viwe.salary}</td>
                </tr>
              ))
            }
          </div>
          <h2>4. Employee list With 10% Increase Salary And Age Will Be Above 25</h2>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile No.</th>
            <th>E-mail ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
          <div>
            {
              data.filter(item1 => item1.age > 25).map(view1 => (
                // <h4>{view1.name} ={view1.salary} + {view1.salary+view1.salary * 10/100} = {view1.salary+view1.salary*10/100}</h4>
                <tr>
                  <td>{view1.name}</td>
                  <td>{view1.age}</td>
                  <td>{view1.mobile}</td>
                  <td>{view1.email}</td>
                  <td>{view1.gender}</td>
                  <td>{view1.salary}</td>
                </tr>
              ))
            }
          </div>
          <h2>5. Employee list Only Female Name And Salary Between 20K To 30K </h2>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile No.</th>
            <th>E-mail ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
          <div>
            {
              data.filter(gen => gen.gender == "Female" && gen.salary > 20000 && gen.salary < 30000).map(cost => (
                // <h4>{cost.name} = {cost.salary}</h4>
                <tr>
                  <td>{cost.name}</td>
                  <td>{cost.age}</td>
                  <td>{cost.mobile}</td>
                  <td>{cost.email}</td>
                  <td>{cost.gender}</td>
                  <td>{cost.salary}</td>
                </tr>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
