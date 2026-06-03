import React, { useState } from "react";

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatRows = [
    { type: "RECLINER", rows: ["AA", "BB"] },
    { type: "PRIME PLUS", rows: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    { type: "EXTRA LEGROOM", rows: ["I"] },
    { type: "PRIME", rows: ["J", "K", "L", "M", "N", "O"] },
    { type: "CLASSIC", rows: ["P", "Q"] },
  ];

  const toggleSeat = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== seatNo)
      );
    } else {
      setSelectedSeats([...selectedSeats, seatNo]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 md:p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Select Seats
      </h1>

      {/* Screen */}

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl">
          <div className="bg-gray-800 text-white text-center py-4 rounded-t-full shadow-xl text-lg font-bold">
            SCREEN
          </div>
        </div>
      </div>

      {/* Seats */}

      <div className="overflow-x-auto">

        {seatRows.map((section) => (
          <div key={section.type} className="mb-8">

            <h2 className="font-bold text-center text-lg mb-4 text-blue-600">
              {section.type}
            </h2>

            {section.rows.map((row) => (
              <div
                key={row}
                className="flex justify-center items-center gap-1 md:gap-2 mb-2"
              >
                <span className="w-8 font-bold">
                  {row}
                </span>

                {[...Array(12)].map((_, index) => {
                  const seatNo = `${row}${index + 1}`;

                  return (
                    <button
                      key={seatNo}
                      onClick={() => toggleSeat(seatNo)}
                      className={`w-7 h-7 md:w-10 md:h-10 rounded text-xs md:text-sm font-semibold
                      ${
                        selectedSeats.includes(seatNo)
                          ? "bg-green-500 text-white"
                          : "bg-white border border-gray-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}

      </div>

      {/* Selected Seats */}

      <div className="bg-white shadow-lg rounded-xl p-5 mt-10 max-w-2xl mx-auto">

        <h2 className="text-xl font-bold mb-3">
          Selected Seats
        </h2>

        <p className="text-gray-700">
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "No seats selected"}
        </p>

        <button
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Continue Booking
        </button>

      </div>

    </div>
  );
};

export default Seat;