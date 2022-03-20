import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  CardSubtitle,
} from "reactstrap";

export default function List(props) {
  return (
    <div>
        <Card body outline>
          <CardImg src={props.poster}/>
          <CardBody>
            <CardTitle tag="h5">
            {props.title}{" "}
              <Badge color="success" pill>
              {props.vote}
              </Badge>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted"
        tag="h6">
            {props.date}
            </CardSubtitle>
            <CardText >
            {props.overview}
            </CardText>
          </CardBody>
        </Card>
    </div>
  );
}
