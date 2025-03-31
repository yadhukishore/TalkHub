import React from "react";
import { Button } from "@/components/ui/button";
import { SendHorizontalIcon, SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({
  newMessage,
  setNewMessage,
  sendMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  handleEmojiClick,
}) => (
  <div className="p-3 border-t border-gray-700 bg-black">
    <div className="flex space-x-3 items-center">
      <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2 text-yellow-500">
            <SmileIcon className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-auto p-0 border-none bg-black">
          <EmojiPicker onEmojiClick={handleEmojiClick} height={350} theme="dark" />
        </PopoverContent>
      </Popover>



      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        className="flex-1 px-4 py-2 text-white bg-gray-900 border border-yellow-500 rounded-full focus:ring-2 focus:ring-yellow-500"
      />

      <Button
        onClick={sendMessage}
        disabled={!newMessage.trim()}
        className="flex items-center justify-center px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-colors duration-200 disabled:bg-gray-500 disabled:text-gray-300"
      >
        <SendHorizontalIcon className="mr-2 h-5 w-5" />
        Send
      </Button>
    </div>
  </div>
);

export default MessageInput;
