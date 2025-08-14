import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#0b132b] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#0c1d4e] transition z-50 sm:px-5 sm:py-3"
        >
          <FaCommentDots size={18} />
          <span className="text-sm font-medium sm:text-base">Let's Chat</span>
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-11/12 max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-xl border rounded-lg overflow-hidden z-50">
          <div className="bg-[#0b132b] text-white flex justify-between items-center px-4 py-3">
            <div>
              <h4 className="font-semibold text-sm sm:text-base">MCR Construction</h4>
              <p className="text-xs sm:text-sm text-green-300">● We’ll reply as soon as we can</p>
            </div>
            <FaTimes className="cursor-pointer" onClick={() => setChatOpen(false)} />
          </div>
          <div className="p-3 sm:p-4 h-60 sm:h-80 md:h-96 overflow-y-auto text-gray-700 text-sm sm:text-base">
            <p className="text-gray-500">Start a conversation...</p>
          </div>
          <div className="border-t p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Write your message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm sm:text-base focus:outline-none"
            />
            <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">😊</button>
            <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">📎</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
