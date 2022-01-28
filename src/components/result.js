import {React} from "react";
import {Button, Div, Text, Anchor} from "atomize";
import {useHistory} from 'react-router-dom'

const Result = ({
  currentDate,
  currentTime,
  unit,
  company,
  platoon,
  elevenLinerStatus,
  natureOfIncident,
  maskedNRIC,
  rankName,
  serviceStatus,
  sexAge,
  briefdescription,
  incidentLocation,
  suspectedpneumonia,
  currentStatus,
  followUp,
  incidentTime,
  civilianmaskedNRIC,
  civilianName,
  civilianAge,
  civilianGender,
  civilianContactNumber,
  pocRankName,
  pocAppointment,
  pocContactNumber,
  downloadLink

}) => {
  const history = useHistory()
  
  return (
  <Div
    bg="success300"
    d={{ xs: "block", md: "flex" }}
    flexWrap="wrap"
    m="1rem"
    rounded="lg"
    flexDir="column"
    p="1rem"
  >
  <Div
    bg="success400"
    d={{ xs: 'block', md: 'flex' }}
    align={{ xs: 'space-around', lg: 'center' }}
    flexWrap="wrap"
    m="1rem"
    flexDir="column"
    rounded="lg"
    p="1rem"
  >
      <Text
      textSize="heading"
      textWeight={{ xs: '400', md: '500' }}
      >
        Results
      </Text>
      <Text
      textSize="title"
      textWeight="300"
      >
        DO NOT REFRESH THIS PAGE
      </Text>
    </Div>
    <Text>
      {currentDate} {currentTime} Hrs
    </Text>
    <Text>
      *{unit}, &#10;&#13; {company}* <br/>
      *{elevenLinerStatus}*
    </Text>
    <Text>
      1) *Nature and Type of incident*: {natureOfIncident}
    </Text>
    <Text>
      2) *Particulars of Serviceman/men Involved*: <br/>
      NRIC: {maskedNRIC} <br/>
      Rank/Name: {rankName} <br/>
      Svs Status: {serviceStatus} <br/>
      Sex/Age: {sexAge} <br/>
      Coy/Pl: {company}/{platoon}
    </Text>
    <Text>
      3) *Brief Description of Incident*: <br/>
      {briefdescription}
    </Text>
    <Text>
      *Other Details* <br/>
      - Travel overseas in the past 14 Days: NIL <br/>
      - Close contact with a confirmed case: NIL <br/>
      - Stay in or near a foreign worker dormitory: NIL <br/>
      - Works in a High Risk Area: NIL <br/>
      - Prolonged ARI with fever above 37.5 for 4 days and above: NIL <br/>
      - Suspected Pneumonia: {suspectedpneumonia} 
    </Text>
    <Text>
      4) *Current Status*: {currentStatus}
    </Text>
    <Text>
      5) *Date & Time of Incident*: {incidentTime}
    </Text>
    <Text>
      6) *Location of incident*: {incidentLocation}
    </Text>
    <Text>
      7) *Follow Up Actions:* <br/>
      {followUp}
    </Text>
    <Text>
      8) *Details/Particulars of civilian involved, if any*: <br/>
      NRIC (Masked): {civilianmaskedNRIC} <br/>
      Name: {civilianName} <br/>
      Age: {civilianAge} <br/>
      Gender: {civilianGender} <br/>
      Contact No: {civilianContactNumber}
    </Text>
    <Text>
      9) *Date & Time reported to GSOC*: <br/>
      Verbal: <br/>
      AIMSIS: 
    </Text>
    <Text>
      10) *Reporting Officer*: <br/>
    </Text>
    <Text>
      *Vetted by* <br/>
      - <br/>
      - <br/>
      - <br/>
    </Text>
    <Text>
      *Point of Contact*: <br/>
      {pocRankName} <br/>
      {pocAppointment} <br/>
      {pocContactNumber}
    </Text>
            
    <Button onClick={()=> {
      history.push('/')
      window.scroll(0,0)
      }}>
      Back to Form
    </Button>

    <Anchor flexWrap="wrap" m="1rem" flexDir="column" p="1rem" download='list.txt' href={downloadLink}>
      <Button >Download raw data</Button>
    </Anchor>
  </Div>
  )
}

export default Result