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
    window.scroll(0,0)
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

          serviceStatus={currentinfo.serviceStatus}
          elevenLinerStatus={currentinfo.elevenLinerStatus}

          natureOfIncident={currentinfo.natureOfIncident}
          maskedNRIC={currentinfo.maskedNRIC}
          rankName={currentinfo.rankName}
          sexAge={currentinfo.sexAge}
          briefDescription={currentinfo.briefDescription}

          travelOverseas = {currentinfo.travelOverseas}
          closeContact = {currentinfo.closeContact}
          dormitory = {currentinfo.dormitory}
          highRiskArea = {currentinfo.highRiskArea}
          prolongedAri = {currentinfo.prolongedAri}
          suspectedPneumonia={currentinfo.suspectedPneumonia}
          
          currentStatus={currentinfo.currentStatus}
          incidentTime={currentinfo.incidentTime}
          incidentLocation={currentinfo.incidentLocation}
          followUp={currentinfo.followUp}

          civilianMaskedNRIC={currentinfo.civilianMaskedNRIC}
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
