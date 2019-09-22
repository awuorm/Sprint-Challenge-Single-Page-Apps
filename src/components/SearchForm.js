import React  from "react";
import { tsPropertySignature } from "@babel/types";

import styled from "styled-components";
import { Formik, Form, Field } from "formik";

 const StyledInput= styled.input`
    margin: 1em;
    padding: 1em;
    width: 50%;
    margin-left: 20%;
 `;


export default function SearchForm(props) {
  return (
    <section className="search-form">
      <Formik/>
      <Form/>
      <Field type="search"/>
      <button>Submit</button>
      {/* <StyledInput type="search" onChange={props.onSearch} placeholder="search" /> */}
    </section>
  );
}
