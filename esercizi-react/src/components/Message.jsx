import "../styles.css";

const Message = ({ text, isSent }) => {
  return (
    <div className={`message ${isSent ? "sent" : "received"}`}>
      {text}
    </div>
  );
};

export default Message;
