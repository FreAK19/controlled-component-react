import React from 'react';
import Form from './components/Form';
import './index.css';
import FormUncontrolled from './components/From_uncontrolled';
import { Tabs, Tab } from 'material-ui/Tabs'


const TabsComponent = () => (
  <Tabs>
    <Tab label="Controlled component">
      <div className="tabContainer">
        <Form hint="Type your text here"/>
      </div>
    </Tab>
    <Tab label="Uncontrolled Components">
      <div className="tabContainer">
        <FormUncontrolled hint="Type your text here"/>
      </div>
    </Tab>
  </Tabs>
);



const App = () => {
  return (
    <TabsComponent/>
  )
};

export default App;



