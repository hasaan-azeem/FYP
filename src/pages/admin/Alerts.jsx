import React from "react";
import AlertTab from "../../components/admin/common/AlertTab/AlertsTab";

const Alerts = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Alerts & Response</h1>
      <p className="text-gray-600 ">
        Manage real-time alerts, review suggested mitigation steps, and simulate
        automated responses.
      </p>
      <AlertTab />
    </div>
  );
};

export default Alerts;
