// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import MUIDataTable from 'mui-datatables';
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
var i = -11;

class AdvFilter extends React.Component {
  
  state = {
    
    columns: ['Id','Name', 'Email', 'Contact Number', 'Age'],
    data: [
      [i++,'Gabby George', 'gg@gmail.com', '3176972225', 30],
      [i++,'Aiden Lloyd', 'al@yahoo.com', '3973122003', 55],
      [i++,'Jaden Collins', 'jc@gmail.com', '2956993581', 27],
      [i++,'Franky Rees', 'fr@gmail.com', '8208750387', 22],
      [i++,'Aaren Rose', 'ar@yahoo.com', '3120352676', 28],
      [i++,'Blake Duncan', 'bd@yatra.com', '5286420932', 65],
      [i++,'Frankie Parry', 'fp@random.com', '0336132109 ', 71],
      [i++,'Lane Wilson', 'lw@website.com', '6198589436', 19],
      [i++,'Robin Duncan', 'rdu@gmail.com', '1674823225', 20],
      [i++,'Mel Brooks', 'mb@gmail.com', '8428394868', 37],
      [i++,'Harper White', 'hw@yahoo.com', '3744359521', 52],
      [i++,'Kris Humphrey', 'kh@gmail.com', '0307718983', 30]
      // ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000'],
      // ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000'],
      // ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000'],
      // ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000'],
      // ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000'],
      // ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000'],
      // ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000'],
      // ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000'],
      // ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000'],
      // ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000'],
      // ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000'],
      // ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000'],
      // ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000'],
      // ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000'],
      // ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000'],
      // ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000'],
      // ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000'],
      // ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000']
    ]
  }
  render() {
    const { columns, data } = this.state;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 10,
      downloadCsv: false,
      page: 1
    };
    return (
      <MUIDataTable
        title="Customer list"
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default AdvFilter;