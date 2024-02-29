import { handleLocalStorage } from "../../localStorage/LocalStorage";


function Conversation() {
  const { user } = handleLocalStorage();

  const selectedChat = {
      users: [
        {
          pic: ""
        },
        {
          pic: ""
        }
      ],
      messages: []
    }

  return (
    <div className="w-3/4 text-white">
      <div className="w-full h-[10%] bg-primary">
        <div className="h-full flex items-center ml-5 space-x-6">
          <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          <p>
            {user._doc.name} {user._doc.lastname}
          </p>
        </div>
      </div>
      <div className=" w-full h-[90%] p-10 bg-[#E0E9EE] flex flex-col space-y-6">
        {/* both chats container */}
        <div className="flex flex-col space-y-6 overflow-scroll w-full"> 
          {/* our chat */}
          {/* probably same component but passing different styles based on whether you are a sender or receiver */}
          <div className="flex text-black space-x-4 self-end">
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */}
              {/* {probably we need a component} */}
              <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                Hola, quería saber si tiene disponibilidad el día lunes para
                realizar el trabajo de cableado en un departamento
              </p>
            </div>
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          </div>
          <div className="flex text-black space-x-4 self-end">
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */}
              {/* {probably we need a component} */}
              <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                Hola, quería saber si tiene disponibilidad el día lunes para
                realizar el trabajo de cableado en un departamento
              </p>
            </div>
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          </div>
          <div className="flex text-black space-x-4 self-end">
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */}
              {/* {probably we need a component} */}
              <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                Hola, quería saber si tiene disponibilidad el día lunes para
                realizar el trabajo de cableado en un departamento
              </p>
            </div>
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          </div>
          <div className="flex text-black space-x-4 self-end">
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */}
              {/* {probably we need a component} */}
              <p className="bg-secondary p-4 rounded-xl shadow-md max-w-[700px]">
                Hola, quería saber si tiene disponibilidad el día lunes para
                realizar el trabajo de cableado en un departamento
              </p>
            </div>
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
          </div>
          {/* {the person we are chatting with} */}
          <div className="flex text-black space-x-4">
            <img className="w-14 h-14 rounded-full" src={user._doc.pic} alt="" />
            <div className="flex flex-col space-y-2">
              {/* {list of messages} */}
              {/* {probably we need a component} */}
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                Hola Camila, como estas?
              </p>
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                El lunes puedo a las 18hs
              </p>
              <p className="max-w-[700px] bg-white p-4 rounded-xl shadow-md">
                Seria para hacer el diagnostico, esta bien?
              </p>
            </div>
          </div>
        </div>

        <div className="self-center justify-items-end">
          <input
            className=" w-[540px] h-[53px] rounded-xl"
            type="text"
            placeholder="Escribi aca tu respuesta"
          />
          <button className=" ml-5 w-[146px] rounded-2xl p-3 text-black bg-accent">
            Responder
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conversation