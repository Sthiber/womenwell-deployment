import React from "react";
import GenericContainer from "./genericContainer.jsx";
import Button from "../../../../button.jsx";
import { ClipboardList } from "lucide-react";

const TestResultsContainer = () => {
  return (
    <GenericContainer>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <ClipboardList className="h-5 w-5 text-pink-500 mr-2" />
        Recent Test Results
      </h2>
      <ul className="space-y-2">
        <li>
          <span className="font-medium">Blood Work</span>
          <br />
          <span className="text-sm text-gray-500">
            Completed on April 10, 2024
          </span>
        </li>
        <li>
          <span className="font-medium">Pap Smear</span>
          <br />
          <span className="text-sm text-gray-500">
            Completed on March 22, 2024
          </span>
        </li>
      </ul>
      <Button variant="outline" className="mt-4">
        View All Results
      </Button>
    </GenericContainer>
  );
};

export default TestResultsContainer;