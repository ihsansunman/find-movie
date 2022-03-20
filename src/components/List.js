import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Badge,
  CardSubtitle,
  Button,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
} from "reactstrap";

export default function List(props) {
  return (
    <div>
      <Card body outline>
        <CardImg src={props.poster} />
        <CardBody>
          <CardTitle tag="h5">
            {props.title}{" "}
            <Badge color="success" pill>
              {props.vote}
            </Badge>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.date}
          </CardSubtitle>
          <div className="text-center">
          <Button id={props.popupId} type="button" outline color="dark" className="width: 100%">
            Show Overview
          </Button>
          </div>
          <UncontrolledPopover placement="bottom" target={props.popupId} trigger="focus">
            <PopoverHeader>{props.title}</PopoverHeader>
            <PopoverBody>
            {props.overview}
            </PopoverBody>
          </UncontrolledPopover>
        </CardBody>
      </Card>
    </div>
  );
}
