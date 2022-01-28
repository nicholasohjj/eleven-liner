// Dark Notifications
import {Notification, Icon } from "atomize";

const UploadNotification = ({success}) => {

    return (
        <>
        <Notification
          bg="success700"
          isOpen={success.value}
          onClose={() => success.onClick(false)}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a success message
        </Notification>
        </>
    )

}

export {UploadNotification}