import { Button, Div, Input, Text } from "atomize"
import React from "react"
import { Setinput } from "../hooks"


const Upload = ({
    currentTime,
    unit,
    company,
    platoon,
    serviceStatus,
    elevenLinerStatus,
    natureOfIncident,
    maskedNRIC,
    rankName,
    sexAge,
    briefDescription,
    travelOverseas,
    closeContact,
    dormitory,
    highRiskArea,
    prolongedAri,
    suspectedPneumonia,
    currentStatus,
    incidentTime,
    incidentLocation,
    followUp,
    civilianMaskedNRIC,
    civilianName,
    civilianAge,
    civilianGender,
    civilianContactNumber,
    pocRankName,
    pocAppointment,
    pocContactNumber
}) => {

    const result = Setinput()

    const Handlechange = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
            result.onClick(JSON.parse(event.target.result))
        }
        reader.readAsText(file)
    }

    const Handlesubmit = () => {
        currentTime.onClick(result.value.currentTime)
        unit.onClick(result.value.unit)
        company.onClick(result.value.company)
        platoon.onClick(result.value.platoon)

        serviceStatus.onClick(result.value.serviceStatus)
        elevenLinerStatus.onClick(result.value.elevenLinerStatus)

        natureOfIncident.onClick(result.value.natureOfIncident)
        maskedNRIC.onClick(result.value.maskedNRIC)
        rankName.onClick(result.value.rankName)
        sexAge.onClick(result.value.sexAge)
        briefDescription.onClick(result.value.briefDescription)

        travelOverseas.onClick(result.value.travelOverseas)
        closeContact.onClick(result.value.closeContact)
        dormitory.onClick(result.value.dormitory)
        highRiskArea.onClick(result.value.highRiskArea)
        prolongedAri.onClick(result.value.prolongedAri)
        suspectedPneumonia.onClick(result.value.suspectedPneumonia)

        currentStatus.onClick(result.value.currentStatus)
        incidentTime.onClick(result.value.incidentTime)
        incidentLocation.onClick(result.value.incidentLocation)
        followUp.onClick(result.value.followUp)

        civilianMaskedNRIC.onClick(result.value.civilianMaskedNRIC)
        civilianName.onClick(result.value.civilianName)
        civilianAge.onClick(result.value.civilianAge)
        civilianGender.onClick(result.value.civilianGender)
        civilianContactNumber.onClick(result.value.civilianContactNumber)

        pocRankName.onClick(result.value.rankName)
        pocAppointment.onClick(result.value.pocAppointment)
        pocContactNumber.onClick(result.value.pocContactNumber)
    }
    return (
        <Div
        bg="brand300"
        d={{ xs: "block", md: "flex" }}
        flexWrap="wrap"
        m="1rem"
        rounded="lg"
        flexDir="column"
        p="1rem"
        >
        <Text textSize="subheader"
     p='1rem' textWeight={{ xs: '400', md: '500' }}>Upload your existing raw data here, if any. (.txt file)</Text>
         <Input
            textWeight={{ xs: '400', md: '500' }}
            textSize="paragraph"
            type="file"
            name="fileupload"
            accept=".txt"
            onChange={Handlechange}
        />
       <Button 
        p='1rem'
        m="1rem"
        flexWrap="nowrap"
        onClick ={Handlesubmit}>Upload raw data</Button>
       </Div>
    )
}

export default Upload