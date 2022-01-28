import { React, useState } from 'react';
import {
  useHistory,
  Switch, Route,
} from 'react-router-dom';
import Form from './form';
import Result from './result';

function App() {
  const history = useHistory();
  const [currentinfo, setcurrentinfo] = useState([]);

  const addNew = (info) => {
    setcurrentinfo(info);
    console.log(currentinfo);
    history.push('/result');
  };

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
        />
      </Route>
      <Route path="/">
        <Form addNew={addNew} />
      </Route>
    </Switch>
  );
}

export default App;
