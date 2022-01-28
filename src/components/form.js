import React from 'react';
import {
  Button, Div, Text, Input, Label, Radiobox, Textarea,
} from 'atomize';
import { Radio } from '../hooks';
import CurrentTime from './time';
import Newdate from './reusable/newdate';

function Form({ addNew }) {
  const Handlesubmit = () => {
    addNew({
      currentDate: Newdate,
      currentTime: currentTime.value,
      unit: unit.value,
      company: company.value,
      platoon: platoon.value,
      serviceStatus: serviceStatus.value,
      elevenLinerStatus: elevenLinerStatus.value,
      natureOfIncident: natureOfIncident.value,
      maskedNRIC: maskedNRIC.value,
      rankName: rankName.value,
      sexAge: sexAge.value,
      briefdescription: briefdescription.value,
      traveloverseas: traveloverseas.value,
      closecontact: closecontact.value,
      dormitory: dormitory.value,
      highriskarea: highriskarea.value,
      prolongedari: prolongedari.value,
      suspectedpneumonia: suspectedpneumonia.value,
      currentStatus: currentStatus.value,
      incidentTime: incidentTime.value,
      incidentLocation: incidentLocation.value,
      followUp: followUp.value,
      civilianmaskedNRIC: civilianmaskedNRIC.value,
      civilianName: civilianName.value,
      civilianAge: civilianAge.value,
      civilianGender: civilianGender.value,
      civilianContactNumber: civilianContactNumber.value,
      pocRankName: pocRankName.value,
      pocAppointment: pocAppointment.value,
      pocContactNumber: pocContactNumber.value,
    });
  };

  const currentTime = Radio(`${CurrentTime}`);
  const unit = Radio();
  const company = Radio('XXX COY');
  const platoon = Radio();

  const serviceStatus = Radio('NSF');
  const elevenLinerStatus = Radio('NEW');

  const natureOfIncident = Radio('TRAINING RELATED\nRUNNY NOSE\nFEVER');
  const maskedNRIC = Radio('TXXXX123A');
  const rankName = Radio('PTE JOHN DOE');
  const sexAge = Radio('M/19');
  const briefdescription = Radio(`On ${Newdate},\nAt ${Number(CurrentTime)} HRS, Serviceman started experiencing runny nose.\nAt XXXXHRS, Serviceman woke up with runny nose and headache. `);

  const traveloverseas = Radio('NIL');
  const closecontact = Radio('NIL');
  const dormitory = Radio('NIL');
  const highriskarea = Radio('NIL');
  const prolongedari = Radio('NIL');
  const suspectedpneumonia = Radio('NIL');

  const currentStatus = Radio('Reporting Sick');
  const incidentTime = Radio(`${Newdate}, ${Number(CurrentTime)} HRS`);
  const incidentLocation = Radio('XXXX CAMP');
  const followUp = Radio('Unit will monitor the serviceman’s condition and to return to camp upon completion of MC.');

  const civilianmaskedNRIC = Radio('-');
  const civilianName = Radio('-');
  const civilianAge = Radio('-');
  const civilianGender = Radio('-');
  const civilianContactNumber = Radio('-');

  const pocRankName = Radio('-');
  const pocAppointment = Radio('-');
  const pocContactNumber = Radio('-');

  return (
    <Div
      bg="gray200"
      d={{ xs: 'block', md: 'flex' }}
      align={{ xs: 'space-around', lg: 'center' }}
      flexWrap="wrap"
      m="1rem"
      flexDir="column"

      p="1rem"
    >

      <Div p="1rem">
        <Text>Current Time</Text>
        <Input value={currentTime.value} onChange={(event) => { currentTime.onClick(event.target.value.toUpperCase()); }} placeholder="Current Time" />
      </Div>

      <Div p="1rem">
        <Text>Unit</Text>
        <Input value={unit.value} onChange={(event) => { unit.onClick(event.target.value.toUpperCase()); }} placeholder="Unit" />
      </Div>

      <Div p="1rem">
        <Text>Company</Text>
        <Input value={company.value} onChange={(event) => { company.onClick(event.target.value.toUpperCase()); }} placeholder="Company" />
      </Div>

      <Div p="1rem">
        <Text>Platoon</Text>
        <Input value={platoon.value} onChange={(event) => { platoon.onClick(event.target.value.toUpperCase()); }} placeholder="Platoon" />
      </Div>

      <Div d="flex" p="1rem">
        <Text>Service Status</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => serviceStatus.onClick('NSF')}
            checked={serviceStatus.value === 'NSF'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NSF
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => serviceStatus.onClick('REG')}
            checked={serviceStatus.value === 'REG'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Regular
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Eleven Liner Status</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => elevenLinerStatus.onClick('NEW')}
            checked={elevenLinerStatus.value === 'NEW'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NEW
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => elevenLinerStatus.onClick('UPDATE')}
            checked={elevenLinerStatus.value === 'UPDATE'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          UPDATE
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => elevenLinerStatus.onClick('FINAL')}
            checked={elevenLinerStatus.value === 'FINAL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          FINAL
        </Label>
      </Div>

      <Div p="1rem">
        <Text>Nature and Type of incident</Text>
        <Textarea value={natureOfIncident.value} onChange={(event) => { natureOfIncident.onClick(event.target.value.toUpperCase()); }} placeholder="Nature and Type of incident" />
      </Div>

      <Div p="1rem">
        <Text>Masked NRIC</Text>
        <Input value={maskedNRIC.value} onChange={(event) => { maskedNRIC.onClick(event.target.value.toUpperCase()); }} placeholder="TXXXX123A" />
      </Div>

      <Div p="1rem">
        <Text>Rank/Name</Text>
        <Input value={rankName.value} onChange={(event) => { rankName.onClick(event.target.value.toUpperCase()); }} placeholder="PTE JOHN DOE" />
      </Div>

      <Div p="1rem">
        <Text>Sex/Age</Text>
        <Input value={sexAge.value} onChange={(event) => { sexAge.onClick(event.target.value.toUpperCase()); }} placeholder="M/19" />
      </Div>

      <Div p="1rem">
        <Text>Brief Description of Incident</Text>
        <Textarea value={briefdescription.value} onChange={(event) => { briefdescription.onClick(event.target.value.toUpperCase()); }} />
      </Div>

      <Div d="flex" p="1rem">
        <Text>Travel overseas in the past 14 Days</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => traveloverseas.onClick('YES')}
            checked={traveloverseas.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => traveloverseas.onClick('NIL')}
            checked={traveloverseas.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Close contact with a confirmed case</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => closecontact.onClick('YES')}
            checked={closecontact.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => closecontact.onClick('NIL')}
            checked={closecontact.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Stay in or near a foreign worker dormitory</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => dormitory.onClick('YES')}
            checked={dormitory.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => dormitory.onClick('NIL')}
            checked={dormitory.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Works in a High Risk Area</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => highriskarea.onClick('YES')}
            checked={highriskarea.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => highriskarea.onClick('NIL')}
            checked={highriskarea.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Prolonged ARI with fever above 37.5 for 4 days and above</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => prolongedari.onClick('YES')}
            checked={prolongedari.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => prolongedari.onClick('NIL')}
            checked={prolongedari.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div d="flex" p="1rem">
        <Text>Suspected Pneumonia</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => suspectedpneumonia.onClick('YES')}
            checked={suspectedpneumonia.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => suspectedpneumonia.onClick('NIL')}
            checked={suspectedpneumonia.value === 'NIL'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          NIL
        </Label>
      </Div>

      <Div p="1rem">
        <Text>Current Status</Text>
        <Textarea value={currentStatus.value} onChange={(event) => { currentStatus.onClick(event.target.value.toUpperCase()); }} placeholder="Reporting Sick" />
      </Div>

      <Div p="1rem">
        <Text>Date & Time of Incident</Text>
        <Input value={incidentTime.value} onChange={(event) => { incidentTime.onClick(event.target.value.toUpperCase()); }} placeholder="DDMMYY, XXXXHRS" />
      </Div>

      <Div p="1rem">
        <Text>Location of incident</Text>
        <Textarea value={incidentLocation.value} onChange={(event) => { incidentLocation.onClick(event.target.value.toUpperCase()); }} placeholder="XXXX Camp" />
      </Div>

      <Div p="1rem">
        <Text>Follow Up Actions Status</Text>
        <Textarea value={followUp.value} onChange={(event) => { followUp.onClick(event.target.value.toUpperCase()); }} placeholder="Unit will monitor the serviceman’s condition and to return to camp upon completion of MC. " />
      </Div>

      <Text>Details/Particulars of civilian involved, if any</Text>

      <Div p="1rem">
        <Text>Masked NRIC</Text>
        <Input value={civilianmaskedNRIC.value} onChange={(event) => { civilianmaskedNRIC.onClick(event.target.value.toUpperCase()); }} placeholder="TXXXX123A" />
      </Div>

      <Div p="1rem">
        <Text>Name</Text>
        <Input value={civilianName.value} onChange={(event) => { civilianName.onClick(event.target.value.toUpperCase()); }} placeholder="JOHN DOE" />
      </Div>

      <Div p="1rem">
        <Text>Age</Text>
        <Input value={civilianAge.value} onChange={(event) => { civilianAge.onClick(event.target.value.toUpperCase()); }} placeholder="19" />
      </Div>

      <Div p="1rem">
        <Text>Gender</Text>
        <Input value={civilianGender.value} onChange={(event) => { civilianGender.onClick(event.target.value.toUpperCase()); }} placeholder="M" />
      </Div>

      <Div p="1rem">
        <Text>Contact Number </Text>
        <Input value={civilianContactNumber.value} onChange={(event) => { civilianContactNumber.onClick(event.target.value.toUpperCase()); }} placeholder="98765432" />
      </Div>

      <Text>Details/Particulars of Point of Contact</Text>

      <Div p="1rem">
        <Text>Rank/Name </Text>
        <Input value={pocRankName.value} onChange={(event) => { pocRankName.onClick(event.target.value.toUpperCase()); }} placeholder="3SG JOHN DOE" />
      </Div>

      <Div p="1rem">
        <Text>Appointment </Text>
        <Input value={pocAppointment.value} onChange={(event) => { pocAppointment.onClick(event.target.value.toUpperCase()); }} placeholder="Ops Spec" />
      </Div>

      <Div p="1rem">
        <Text>Contact Number </Text>
        <Input value={pocContactNumber.value} onChange={(event) => { pocContactNumber.onClick(event.target.value.toUpperCase()); }} placeholder="98765432" />
      </Div>

      <Button
        onClick={Handlesubmit}
        bg="warning700"
        hoverBg="warning800"
        rounded="circle"
        p={{ r: '1.5rem', l: '1rem' }}
        shadow="3"
        hoverShadow="4"
      >
        Submit
      </Button>
    </Div>
  );
}

export default Form;
