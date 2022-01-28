// Aligned Centered
import { Div, Button, Modal, Icon, Text } from "atomize";

const SubmitModal = ({ isOpen, onClose, Handlesubmit }) => {
  return (
    <Modal isOpen={isOpen} bg="info200" onClose={onClose} align="center" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="Loading3"
          color="info800"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Are you sure you would like to submit your form?
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="info200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={Handlesubmit} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  );
};

const ReturnModal = ({ isOpen, onClose, Handlesubmit }) => {
  return (
    <Modal isOpen={isOpen} bg="success200" onClose={onClose} align="center" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="Loading3"
          color="success800"
          m={{ t: "0.35rem", r: "0.5rem" }}
          flexWrap="wrap"
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Are you sure you would like to resubmit your form? All data will be lost. Download your raw data for future edits!
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="success200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={Handlesubmit} bg="success700">
          Yes, Resubmit Form.
        </Button>
      </Div>
    </Modal>
  );
};

export {SubmitModal, ReturnModal}