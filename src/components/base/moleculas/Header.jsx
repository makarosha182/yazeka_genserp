import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from "../atoms/Input";
import HistoryButton from "../atoms/HistoryButton"; 
import AddButton from "../atoms/AddButton";
import UserPic from "../atoms/UserPic";

const Header = ({ figmaActive, onInputFocus, ...props }) => {
  return (
      <Container
        className="p-0 m-0 d-flex align-items-center"
        fluid
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          width: '-webkit-fill-available',
          height: '100%'
        }}
      >
        <Row className="g-2 align-items-center flex-nowrap" style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          width: '-webkit-fill-available',
          height: '100%'
        }}>
          <Col xs="auto" className="d-flex align-items-center">
            <AddButton />
          </Col>
          <Col style={{ flex: 1, minWidth: 0 }} />
          <Col xs="auto" className="d-flex align-items-center">
            <UserPic />
          </Col>
        </Row>
      </Container>
  );
};

export default Header; 