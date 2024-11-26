import React from "react";
import shipments from "../../data/cargoData";
export const ShipmentTable = () => {
  return (
    <div className="shipment-table">
      <div className="table-header">
        <div>Shipment ID</div>
        <div>Commodity</div>
        <div>Destination</div>
        <div>Type</div>
        <div>Gross Weight</div>
        <div>Action</div>
      </div>
      {shipments.map((shipment, index) => (
        <div className="table-row" key={index}>
          <div>{shipment.id}</div>
          <div>{shipment.commodity}</div>
          <div>{shipment.destination}</div>
          <div>{shipment.type}</div>
          <div>{shipment.weight}</div>
          <div className="process-buttons">
            <button className="generate-button">Generate Tender</button>
            <button className="status">Processing</button>
          </div>
        </div>
      ))}
    </div>
  );
};
