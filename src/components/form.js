import React from 'react';
import {Button, Div, Text, Input, Label, Radiobox, Textarea,} from 'atomize';
import { Setinput } from '../hooks';
import CurrentTime from './time';
import Newdate from './reusable/newdate';
import Upload from './upload';
import { SubmitModal } from './modal';

const Form = ({ addNew }) => {
  
  const Handlesubmit = () => {
    showModal.onClick(false)
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
      briefDescription: briefDescription.value,
      travelOverseas: travelOverseas.value,
      closeContact: closeContact.value,
      dormitory: dormitory.value,
      highRiskArea: highRiskArea.value,
      prolongedAri: prolongedAri.value,
      suspectedPneumonia: suspectedPneumonia.value,
      currentStatus: currentStatus.value,
      incidentTime: incidentTime.value,
      incidentLocation: incidentLocation.value,
      followUp: followUp.value,
      civilianMaskedNRIC: civilianMaskedNRIC.value,
      civilianName: civilianName.value,
      civilianAge: civilianAge.value,
      civilianGender: civilianGender.value,
      civilianContactNumber: civilianContactNumber.value,
      pocRankName: pocRankName.value,
      pocAppointment: pocAppointment.value,
      pocContactNumber: pocContactNumber.value,
    });
  };

  const currentTime = Setinput(`${CurrentTime}`);
  const unit = Setinput('');
  const company = Setinput('XXX COY');
  const platoon = Setinput('');

  const serviceStatus = Setinput('NSF');
  const elevenLinerStatus = Setinput('NEW');

  const natureOfIncident = Setinput('TRAINING RELATED\nRUNNY NOSE\nFEVER');
  const maskedNRIC = Setinput('TXXXX123A');
  const rankName = Setinput('PTE JOHN DOE');
  const sexAge = Setinput('M/19');
  const briefDescription = Setinput(`On ${Newdate},\nAt ${Number(CurrentTime)} HRS, Serviceman started experiencing runny nose.\nAt XXXXHRS, Serviceman woke up with runny nose and headache. `);

  const travelOverseas = Setinput('NIL');
  const closeContact = Setinput('NIL');
  const dormitory = Setinput('NIL');
  const highRiskArea = Setinput('NIL');
  const prolongedAri = Setinput('NIL');
  const suspectedPneumonia = Setinput('NIL');

  const currentStatus = Setinput('Reporting Sick');
  const incidentTime = Setinput(`${Newdate}, ${Number(CurrentTime)} HRS`);
  const incidentLocation = Setinput('XXXX CAMP');
  const followUp = Setinput('Unit will monitor the serviceman’s condition and to return to camp upon completion of MC.');

  const civilianMaskedNRIC = Setinput('-');
  const civilianName = Setinput('-');
  const civilianAge = Setinput('-');
  const civilianGender = Setinput('-');
  const civilianContactNumber = Setinput('-');

  const pocRankName = Setinput('-');
  const pocAppointment = Setinput('-');
  const pocContactNumber = Setinput('-');

  const showModal = Setinput(false)

  return (
    <Div
      bg="info300"
      d={{ xs: 'block', md: 'flex' }}
      flexWrap="wrap"
      m="1rem"
      rounded="lg"
      flexDir="column"
      p="1rem"
    >
      <Div
      bg="info400"
      d={{ xs: 'block', md: 'flex' }}
      flexWrap="wrap"
      m="1rem"
      flexDir="column"
      rounded="lg"
      p="1rem"
    >
      <Text
      textSize="heading"
      textWeight={{ xs: '400', md: '500' }}

      >Eleven Liner Form</Text>
      <Text
      textSize="title"
      textWeight="300"
      >DO NOT REFRESH THIS PAGE</Text>
    </Div>

    <Upload
      currentTime={currentTime}
      unit={unit}
      company={company}
      platoon={platoon}

      serviceStatus={serviceStatus}
      elevenLinerStatus={elevenLinerStatus}
      natureOfIncident={natureOfIncident}

      maskedNRIC={maskedNRIC}
      rankName={rankName}
      sexAge={sexAge}
      briefDescription={briefDescription}

      travelOverseas={travelOverseas}
      closeContact={closeContact}
      dormitory={dormitory}
      highRiskArea={highRiskArea}
      prolongedAri={prolongedAri}
      suspectedPneumonia={suspectedPneumonia}

      currentStatus={currentStatus}
      incidentTime={incidentTime}
      incidentLocation={incidentLocation}
      followUp={followUp}

      civilianMaskedNRIC={civilianMaskedNRIC}
      civilianName={civilianName}
      civilianAge={civilianAge}
      civilianGender={civilianGender}
      civilianContactNumber={civilianContactNumber}
      
      pocRankName={pocRankName}
      pocAppointment={pocAppointment}
      pocContactNumber={pocContactNumber}
    />

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
        <Textarea value={briefDescription.value} onChange={(event) => { briefDescription.onClick(event.target.value.toUpperCase()); }} />
      </Div>

      <Div d="flex" p="1rem">
        <Text>Travel overseas in the past 14 Days</Text>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => travelOverseas.onClick('YES')}
            checked={travelOverseas.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => travelOverseas.onClick('NIL')}
            checked={travelOverseas.value === 'NIL'}
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
            onChange={() => closeContact.onClick('YES')}
            checked={closeContact.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => closeContact.onClick('NIL')}
            checked={closeContact.value === 'NIL'}
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
            onChange={() => highRiskArea.onClick('YES')}
            checked={highRiskArea.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => highRiskArea.onClick('NIL')}
            checked={highRiskArea.value === 'NIL'}
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
            onChange={() => prolongedAri.onClick('YES')}
            checked={prolongedAri.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => prolongedAri.onClick('NIL')}
            checked={prolongedAri.value === 'NIL'}
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
            onChange={() => suspectedPneumonia.onClick('YES')}
            checked={suspectedPneumonia.value === 'YES'}
            inactiveColor="danger400"
            activeColor="danger700"
            size="22px"
          />
          Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: '0.5rem' }}>
          <Radiobox
            onChange={() => suspectedPneumonia.onClick('NIL')}
            checked={suspectedPneumonia.value === 'NIL'}
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
        <Input value={civilianMaskedNRIC.value} onChange={(event) => { civilianMaskedNRIC.onClick(event.target.value.toUpperCase()); }} placeholder="TXXXX123A" />
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
          bg="info700"
          hoverBg="info600"
          rounded="md"
          m={{ b: "1rem" }}
          onClick={()=> showModal.onClick(true)}
        >
          Submit
        </Button>
        <SubmitModal
          isOpen={showModal.value}
          onClose={()=> showModal.onClick(false)}
          Handlesubmit={Handlesubmit}
        />
    </Div>
  );
}

export default Form;
