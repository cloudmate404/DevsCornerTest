import React from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
import { ShipmentTable } from "./components/shipmentTable/ShipmentTable";
import SearchBar from "./components/searchBar/SearchBar";
const Shipment = () => {
  return (
    <div className="shipment">
      <Sidebar />
      <div className="main">
        <div className="top">
          <h1 className="header">Shipments</h1>

          <div className="top-tab">
            <div className="circ2"></div>
            <div className="circ2"></div>
            <div className="circ2"></div>
          </div>
        </div>
        <SearchBar />
        <div className="hd">
          <div className="filters">
            <button className="filter-button">All Shipments</button>
            <button className="filter-button">Sea Freight</button>
            <button className="filter-button">Air Freight</button>
          </div>
          <div className="action-buttons">
            <button className="add-shipment">Add Shipment</button>
            <button className="all-time">All Time</button>
          </div>
        </div>
        <ShipmentTable />
      </div>
    </div>
  );
};

export default Shipment;
