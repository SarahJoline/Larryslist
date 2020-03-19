import React from "react";
import { Button } from "reactstrap";
import Test from "../Test/Test";


function Categories() {
  return (
    <div>
      <Test />
      <Button color="danger">Cars</Button>
      <Button color="danger">Jobs</Button>
      <Button color="danger">Pets</Button>
      <Button color="danger">Housing</Button>
      <Button color="danger">Missed Connections</Button>
    </div>
  );
}

export default Categories;
