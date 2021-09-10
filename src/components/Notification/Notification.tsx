import ReactDOM from "react-dom";

interface Props {
  title: string;
  message: string;
  status: string;
}

function Notification(props: Props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "alert-success";
  }

  if (status === "error") {
    statusClasses = "alert-error";
  }

  const cssClasses = `${"alert my-6"} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications") as HTMLDivElement
  );
}

export default Notification;
