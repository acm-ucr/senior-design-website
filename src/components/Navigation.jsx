"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      className="py-2 px-3 m-0 min-h-[8vh] drop-shadow-lg flex justify-between bg-white md:min-h-[5vh]"
    >
      <Navbar.Brand>
        <Link
          className="flex flex-grow md:px-3 space-x-1.5 md:space-x-2.5"
          style={{ textDecoration: "none" }}
          href="/"
        >
          <span className="text-senior-yellow-100 text-xl md:text-3xl font-extrabold ">
            UCR
          </span>
          <span className="text-senior-purple-100 text-xl md:text-3xl font-bold">
            Senior Designs
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars className="text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse
        id="navbar-nav"
        className="items-center justify-end md:mr-8 flex"
      >
        <Nav className="flex items-centerw-auto">
          <Nav.Link
            as={Link}
            href="/projects"
            className="text-senior-purple-100 md:!text-2xl"
          >
            PROJECTS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
