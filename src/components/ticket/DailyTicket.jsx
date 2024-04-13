import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import '../../components/ticket/ticket.css';

const DailyTicket = ({ gameName, userName, selectedNumbers, ticketCode, ticketAmount, total }) => {
  const ticketRef = useRef(null);
  const [downloaded, setDownloaded] = useState(false);
  const storage = getStorage();
  
  const currentDate = new Date().toLocaleDateString();

  const downloadTicket = async () => {
    try {
      const ticketElement = ticketRef.current;
      const canvas = await html2canvas(ticketElement);
      const blob = await new Promise(resolve => canvas.toBlob(resolve));
      const ticketImageRef = ref(storage, `Daily Tickets/${ticketCode}.png`);
      await uploadBytes(ticketImageRef, blob);
      console.log("Ticket image uploaded successfully!");
      setDownloaded(true);
    } catch (error) {
      console.error("Error uploading ticket image:", error);
    }
  };

  return (
    <>
      <div className='center'>
        <div className='ticket'>
          <div className='left'>
            <img src={"https://i.postimg.cc/7PcwCBwW/luckywin.png"} className='-mt-[80px] -ml-[50px] w-[100px] h-[100px]' alt="" />

            <div className='lcuts'>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
            </div>

            <div className='w-[450px] p-4 flex mt-[130px] flex-col justify-center items-center -ml-[80px]' ref={ticketRef}>
              <h2 className="text-3xl -mt-[250px] archivo-black-regular ">Daily Lottery Ticket</h2>
              <p className="mb-2 mt-5 archivo-black-regular"><span className="archivo-black-regular">Game:</span>{gameName}</p>
              <p className="mb-2 archivo-black-regular"><span className="archivo-black-regular">User:</span> {userName}</p>
              <p className="mb-2 archivo-black-regular">{selectedNumbers.join(', ')}</p>
              <p className="mb-2 archivo-black-regular"><span className="archivo-black-regular">Total:</span> ₹{total}</p>
              <p className="mb-2 archivo-black-regular"><span className="archivo-black-regular">Ticket Price:</span> ₹{ticketAmount}</p>

              <div className='flex flex-row gap-[180px] -mb-32'>
                <p className="mb-2 bg-blue-900 p-2 rounded-xl archivo-black-regular"><span className="archivo-black-regular">{currentDate}</span> </p>
                <p className="mb-2 bg-blue-900 p-2 rounded-xl archivo-black-regular"><span className="archivo-black-regular">30/4/2024</span> </p>
              </div>

            </div>
          </div>
          <div className='lcircles'>
            <div className='lcircle'></div>
            <div className='lcircle'></div>
            <div className='lcircle'></div>
          </div>
          <div className='right'>
            <div className='rcuts'>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>
              <div className='cut'></div>

            </div>
            <div className='w-[100%] h-[160px] bg-gradient-to-b from-[#DBA979] via-white to-[#DBA979] '>

            </div>
            <div className="flex-col justify-center items-center relative top-[30px] left-[50px]">
              <QRCode value={ticketCode.toString()} size={100} className='outline-double outline-8' />
              <p className="archivo-black-regular relative top-3 -left-5">DD{ticketCode}</p>

            </div>
            <div className='ccircles'>
              <div className='ccircle'></div>
              <div className='ccircle'></div>
            </div>

          </div>
          <div className='rcircles'>
            <div className='rcircle'></div>
            <div className='rcircle'></div>
            <div className='rcircle'></div>
          </div>
        </div>
      </div>
      {!downloaded && (
        <div className="flex justify-center relative -top-[120px] left-[300px]">
          <button onClick={downloadTicket} className="bg-yellow-300 hover:bg-opacity-10 text-blue-800 font-bold py-2 px-4 rounded">
            Download Ticket
          </button>
        </div>
      )}

    </>
  );
};

export default DailyTicket;