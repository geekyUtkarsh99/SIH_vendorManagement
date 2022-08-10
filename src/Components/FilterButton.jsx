import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Form } from "react-bootstrap";
import SortByItems from "./SortByItems";
import './FilterButton.css'

function FilterButton() {

  
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Header className="bg-light border-bottom-0" >Sort by</Popover.Header>
            <Popover.Body>
              <SortByItems/>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="outline-dark">Filter</Button>
      </OverlayTrigger>
    </>
  );
}

export default FilterButton;
