import { React, useState } from 'react';
import {
  useHistory,
  Switch, Route,
} from 'react-router-dom';
import Form from './components/form'
import Result from './components/result';

const App = () => {
  const history = useHistory();
  const [currentinfo, setcurrentinfo] = useState('');

  const addNew = (info) => {
    setcurrentinfo(info);
    console.log(currentinfo);
    history.push('/result');
  };

  const data = new Blob([JSON.stringify(currentinfo)], { type: 'text/javascript' })
  const downloadLink = window.URL.createObjectURL(data)


  return (
    <Switch>
      <Route path="/result">

        <Result
          currentDate={currentinfo.currentDate}
          currentTime={currentinfo.currentTime}
          unit={currentinfo.unit}
          company={currentinfo.company}
          platoon={currentinfo.platoon}
          elevenLinerStatus={currentinfo.elevenLinerStatus}
          natureOfIncident={currentinfo.natureOfIncident}
          maskedNRIC={currentinfo.maskedNRIC}
          rankName={currentinfo.rankName}
          serviceStatus={currentinfo.serviceStatus}
          sexAge={currentinfo.sexAge}
          briefdescription={currentinfo.briefdescription}
          suspectedpneumonia={currentinfo.suspectedpneumonia}
          incidentLocation={currentinfo.incidentLocation}
          currentStatus={currentinfo.currentStatus}
          followUp={currentinfo.followUp}
          incidentTime={currentinfo.incidentTime}
          civilianmaskedNRIC={currentinfo.civilianmaskedNRIC}
          civilianName={currentinfo.civilianName}
          civilianAge={currentinfo.civilianAge}
          civilianGender={currentinfo.civilianGender}
          civilianContactNumber={currentinfo.civilianContactNumber}
          pocRankName={currentinfo.pocRankName}
          pocAppointment={currentinfo.pocAppointment}
          pocContactNumber={currentinfo.pocContactNumber}
          downloadLink={downloadLink}
        />  
      </Route>
      <Route path="/">
        <Form addNew={addNew} />
      </Route>
    </Switch>
  );
}

export default App;
