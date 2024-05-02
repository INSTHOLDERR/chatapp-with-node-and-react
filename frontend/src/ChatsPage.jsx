// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic('b88e3a35-7a44-43e4-80f1-7fe23504af87',props.user.username,props.user.secret);
//   return (
//     <div style={{height:'100vh'}}>
//    <MultiChatSocket {...chatProps}/>
//    <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
//     </div>
//   );
// };

// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={'b88e3a35-7a44-43e4-80f1-7fe23504af87'}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;