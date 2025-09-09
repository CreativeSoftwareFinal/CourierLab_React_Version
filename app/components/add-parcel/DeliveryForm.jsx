// "use client";
// import { useState } from "react";

// const DeliveryForm = () => {
//   const [deliveryType, setDeliveryType] = useState("home");
//   const [exchange, setExchange] = useState(false);

//   return (
//    <div>
//      <div className=" md:p-6">             
//       <div className="flex mb-6">
//         <label className="inline-flex items-center mr-4 cursor-pointer">
//           <input
//             type="radio"
//             className="form-radio h-4 w-4 text-primary-active cursor-pointer"
//             checked={deliveryType === "home"}
//             onChange={() => setDeliveryType("home")}
//           />
//           <span className="ml-2 text-md font-medium text-primary">
//             Home Delivery
//           </span>
//         </label>
//         <label className="inline-flex items-center cursor-pointer">
//           <input
//             type="radio"
//             className="form-radio h-4 w-4 text-primary-active cursor-pointer"
//             checked={deliveryType === "point"}
//             onChange={() => setDeliveryType("point")}
//           />
//           <span className="ml-2 text-md font-medium text-primary">
//             Point Delivery
//           </span>
//         </label>
//       </div>

//       {/* Optional: Show extra field only for point delivery */}
//       {deliveryType === "point" && (
//         <div className="mb-4">
//           <label className="block text-md font-medium text-primary-active mb-1">
//             পয়েন্ট ডেলিভারির ক্ষেত্রে প্রাপককে নিকটস্থ হাব থেকে পার্সেল সংগ্রহ
//             করতে হবে।
//           </label>
//         </div>
//       )}

//       {/* Form Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Phone#
//           </label>
//           <input
//             type="text"
//             placeholder="Type Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             COD Amount
//           </label>
//           <input
//             type="number"
//             placeholder="COD Amount"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div className="mb-4">
//           <label className="block text-md font-medium text-secondary mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="Type Name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-md font-medium text-secondary mb-1">
//             Invoice
//           </label>
//           <input
//             type="text"
//             placeholder="Type Invoice"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Address
//           </label>
//           <textarea
//             placeholder="Type Address"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Item Description
//           </label>
//           <textarea
//             placeholder="Type Item Description"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             District
//           </label>
//           <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
//             <option>Dhaka City</option>
//             <option>Bogura</option>
//             <option>Pabna</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Area
//           </label>
//           <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
//             <option>Dhaka City</option>
//             <option>Bogura</option>
//             <option>Pabna</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Items
//           </label>
//           <textarea
//             placeholder="Type Items"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Note
//           </label>
//           <textarea
//             placeholder="Type Note"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Alert Native
//           </label>
//           <input
//             type="text"
//             placeholder="Type Alert Native"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Weight (Kg)
//           </label>
//           <input
//             type="number"
//             defaultValue={0}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Recipient Email
//           </label>
//           <input
//             type="text"
//             placeholder="Type Recipient Email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <div className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               checked={exchange}
//               onChange={() => setExchange(!exchange)}
//               className="h-4 w-4 text-primary-active border-gray rounded"
//             />
//             <label className="block text-md font-medium text-secondary ml-2">
//               Exchange
//             </label>
//           </div>
//           <button className="w-full button-primary cursor-pointer text-white p-2.5 px-4 rounded-md hover:button-primary focus:outline-none text-xl focus:ring-button-primary focus:ring-offset-2">
//             Submit
//           </button>
//         </div>
//       </div>

//       <p className="mt-4 text-md text-secondary text-center font-medium">
//         * PickUp Time{" "}
//         <span className="text-primary-active font-medium">4pm-7pm</span> Approx.
//       </p>

//       <p className="mt-7 text-md text-primary font-medium">
//         To create multiple orders quickly try{" "}
//         <span className="text-primary-active font-medium">Bulk Import</span>
//       </p>
//     </div>
//    </div>
//   );
// };

// export default DeliveryForm;







// "use client";
// import { useEffect, useState } from "react";

// const DeliveryForm = () => {
//   const [deliveryType, setDeliveryType] = useState("home");
//   const [exchange, setExchange] = useState(false);

//   // Districts & Areas state
//   const [districts, setDistricts] = useState([]);
//   const [areas, setAreas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState("");

//   // Load districts initially
//   useEffect(() => {
//     const fetchDistricts = async () => {
//       try {
//         const res = await fetch(
//           "https://admin.merchantfcservice.com/api/distList"
//         );
//         const data = await res.json();
//         if (data.Status) {
//           setDistricts(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching districts:", error);
//       }
//     };
//     fetchDistricts();
//   }, []);

//   // Load areas when district changes
//   useEffect(() => {
//     const fetchAreas = async () => {
//       if (!selectedDistrict) return;
//       try {
//         const res = await fetch(
//           `https://admin.merchantfcservice.com/api/dist-area?id=${selectedDistrict}`
//         );
//         const data = await res.json();
//         if (data.Status) {
//           setAreas(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching areas:", error);
//       }
//     };
//     fetchAreas();
//   }, [selectedDistrict]);

//   return (
//     <div className="md:p-6">
//       <div className="flex mb-6">
//         <label className="inline-flex items-center mr-4 cursor-pointer">
//           <input
//             type="radio"
//             className="form-radio h-4 w-4 text-primary-active cursor-pointer"
//             checked={deliveryType === "home"}
//             onChange={() => setDeliveryType("home")}
//           />
//           <span className="ml-2 text-md font-medium text-primary">
//             Home Delivery
//           </span>
//         </label>
//         <label className="inline-flex items-center cursor-pointer">
//           <input
//             type="radio"
//             className="form-radio h-4 w-4 text-primary-active cursor-pointer"
//             checked={deliveryType === "point"}
//             onChange={() => setDeliveryType("point")}
//           />
//           <span className="ml-2 text-md font-medium text-primary">
//             Point Delivery
//           </span>
//         </label>
//       </div>

//       {deliveryType === "point" && (
//         <div className="mb-4">
//           <label className="block text-md font-medium text-primary-active mb-1">
//             পয়েন্ট ডেলিভারির ক্ষেত্রে প্রাপককে নিকটস্থ হাব থেকে পার্সেল সংগ্রহ
//             করতে হবে।
//           </label>
//         </div>
//       )}

//       {/* Phone & COD */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Phone#
//           </label>
//           <input
//             type="text"
//             placeholder="Type Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             COD Amount
//           </label>
//           <input
//             type="number"
//             placeholder="COD Amount"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Name & Invoice */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="Type Name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Invoice
//           </label>
//           <input
//             type="text"
//             placeholder="Type Invoice"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Address & Item Description */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Address
//           </label>
//           <textarea
//             placeholder="Type Address"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Item Description
//           </label>
//           <textarea
//             placeholder="Type Item Description"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//       </div>

//       {/* District & Area Dropdown */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             District
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//             value={selectedDistrict}
//             onChange={(e) => setSelectedDistrict(e.target.value)}
//           >
//             <option value="">Select District</option>
//             {districts.map((dist) => (
//               <option key={dist.id} value={dist.id}>
//                 {dist.name} ({dist.bn_name})
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Area
//           </label>
//           <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
//             <option value="">Select Area</option>
//             {areas.map((area) => (
//               <option key={area.id} value={area.id}>
//                 {area.area}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Items & Note */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Items
//           </label>
//           <textarea
//             placeholder="Type Items"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Note
//           </label>
//           <textarea
//             placeholder="Type Note"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//       </div>

//       {/* Extra fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Alert Native
//           </label>
//           <input
//             type="text"
//             placeholder="Type Alert Native"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//       <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Waight
//           </label>
//           <input
//             type="text"
//             placeholder="0"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-md font-medium text-secondary mb-1">
//             Recipient Email
//           </label>
//           <input
//             type="text"
//             placeholder="Type Recipient Email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div>
//           <div className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               checked={exchange}
//               onChange={() => setExchange(!exchange)}
//               className="h-4 w-4 text-primary-active border-gray rounded"
//             />
//             <label className="block text-md font-medium text-secondary ml-2">
//               Exchange
//             </label>
//           </div>
//           <button className="w-full button-primary cursor-pointer text-white p-2.5 px-4 rounded-md hover:button-primary focus:outline-none text-xl focus:ring-button-primary focus:ring-offset-2">
//             Submit
//           </button>
//         </div>
//       </div>

//       <p className="mt-4 text-md text-secondary text-center font-medium">
//         * PickUp Time{" "}
//         <span className="text-primary-active font-medium">4pm-7pm</span> Approx.
//       </p>

//       <p className="mt-7 text-md text-primary font-medium">
//         To create multiple orders quickly try{" "}
//         <span className="text-primary-active font-medium">Bulk Import</span>
//       </p>
//     </div>
//   );
// };

// export default DeliveryForm;
































"use client";
import { useEffect, useState } from "react";

const DeliveryForm = () => {
  const [deliveryType, setDeliveryType] = useState("home");
  const [exchange, setExchange] = useState(false);


  const [districts, setDistricts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const res = await fetch(
          "https://admin.merchantfcservice.com/api/distList"
        );
        const data = await res.json();
        if (data.Status) {
          setDistricts(data.data);
        }
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };
    fetchDistricts();
  }, []);

  // Load areas when district changes
  useEffect(() => {
    const fetchAreas = async () => {
      if (!selectedDistrict) return;
      try {
        const res = await fetch(
          `https://admin.merchantfcservice.com/api/dist-area?id=${selectedDistrict}`
        );
        const data = await res.json();
        if (data.Status) {
          setAreas(data.data);
        }
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    fetchAreas();
  }, [selectedDistrict]);

  return (
    <div className="md:p-6">
      <div className="flex mb-6">
        <label className="inline-flex items-center mr-4 cursor-pointer">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-primary-active cursor-pointer"
            checked={deliveryType === "home"}
            onChange={() => setDeliveryType("home")}
          />
          <span className="ml-2 text-md font-medium text-primary">
            Home Delivery
          </span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-primary-active cursor-pointer"
            checked={deliveryType === "point"}
            onChange={() => setDeliveryType("point")}
          />
          <span className="ml-2 text-md font-medium text-primary">
            Point Delivery
          </span>
        </label>
      </div>

      {deliveryType === "point" && (
        <div className="mb-4">
          <label className="block text-md font-medium text-primary-active mb-1">
            পয়েন্ট ডেলিভারির ক্ষেত্রে প্রাপককে নিকটস্থ হাব থেকে পার্সেল সংগ্রহ
            করতে হবে।
          </label>
        </div>
      )}

      {/* Phone & COD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Phone#
          </label>
          <input
            type="text"
            placeholder="Type Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            COD Amount
          </label>
          <input
            type="number"
            placeholder="COD Amount"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Name & Invoice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Type Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Invoice
          </label>
          <input
            type="text"
            placeholder="Type Invoice"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Address & Item Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Address
          </label>
          <textarea
            placeholder="Type Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Item Description
          </label>
          <textarea
            placeholder="Type Item Description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
        </div>
      </div>

      {/* District & Area Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            District
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districts.map((dist) => (
              <option key={dist.id} value={dist.id}>
                {dist.name} ({dist.bn_name})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Area
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
            <option value="">Select Area</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Items & Note */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Items
          </label>
          <textarea
            placeholder="Type Items"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Note
          </label>
          <textarea
            placeholder="Type Note"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
        </div>
      </div>

      {/* Extra fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Alert Native
          </label>
          <input
            type="text"
            placeholder="Type Alert Native"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Waight
          </label>
          <input
            type="text"
            placeholder="0"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-md font-medium text-secondary mb-1">
            Recipient Email
          </label>
          <input
            type="text"
            placeholder="Type Recipient Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={exchange}
              onChange={() => setExchange(!exchange)}
              className="h-4 w-4 text-primary-active border-gray rounded"
            />
            <label className="block text-md font-medium text-secondary ml-2">
              Exchange
            </label>
          </div>
          <button className="w-full button-primary cursor-pointer text-white p-2.5 px-4 rounded-md hover:button-primary focus:outline-none text-xl focus:ring-button-primary focus:ring-offset-2">
            Submit
          </button>
        </div>
      </div>

      <p className="mt-4 text-md text-secondary text-center font-medium">
        * PickUp Time{" "}
        <span className="text-primary-active font-medium">4pm-7pm</span> Approx.
      </p>

      <p className="mt-7 text-md text-primary font-medium">
        To create multiple orders quickly try{" "}
        <span className="text-primary-active font-medium">Bulk Import</span>
      </p>
    </div>
  );
};

export default DeliveryForm;
