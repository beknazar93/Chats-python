import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        // projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        projectId="25e88fc9-308c-418d-8055-e10a26c0629c"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
