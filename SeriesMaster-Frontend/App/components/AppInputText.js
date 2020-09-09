import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const InputContainer = styled.View`
  background: #fcfcfc;
  border-radius: 25px;
  margin: 10px;
`;

const InputText = styled.TextInput`
  color: #20232a;
  padding: 10px;
  margin-left: 5px;
`;

const AppInputText = ({ placeholder, query, onChange }) => {
  return (
    <InputContainer>
      <InputText
        value={query}
        onChange={() => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

AppInputText.propTypes = {
  query: PropTypes.any,
  onChange: PropTypes.any,
  placeholder: PropTypes.string,
};

export default AppInputText;