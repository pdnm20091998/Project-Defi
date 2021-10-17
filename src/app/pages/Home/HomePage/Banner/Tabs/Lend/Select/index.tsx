import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import makeAnimated from 'react-select/animated';

const SelectA = styled(Select)`
  .css-tlfecz-indicatorContainer {
    padding-left: 0px;
  }
  .css-1gtu0rj-indicatorContainer {
    padding-left: 0px;
  }
  .css-1fz1i0g-Input {
    margin-left: 10px;
  }
  .css-ndvmx-singleValue {
    color: #fff;
    padding-right: 5px;
    margin-left: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-182fo9s-option {
    display: flex;
    justify-content: flex-start;
    img {
      margin-right: 8px;
    }
  }
  .css-y6e3hu-option {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    background-color: #1976d2;
  }
  .css-jp1qg2-multiValue {
    background-color: hsl(0, 0%, 25%);
    color: #fff;
  }
  .css-14euz19-multiValue {
    background-color: hsl(0, 0%, 25%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 94px; */
    height: 33px;
    & > .css-1k48koi {
      svg:hover {
        padding: 3px;
        border-radius: 20px;
        background-color: hsl(0, 0%, 50%);
      }
    }
    & > div {
      padding: 0px;
      img {
        margin-right: 5px;
      }
      @media (max-width: 575px) {
        span {
          display: none;
        }
      }
    }
  }
  .knhgOc {
    div {
      cursor: text;
    }
  }
  .css-1ywozm8-ValueContainer {
    cursor: text;
  }
  .css-1fz1i0g-Input {
    cursor: text;
    input {
      cursor: text;
    }
  }
  .css-e73spq-control {
    box-shadow: #dba83d 0px 0px 0px 2px;
  }
`;
const animatedComponents = makeAnimated();
export function SelectAll(props: any) {
  const options1: any = props.data.map(e => ({
    value: e.label,
    label: (
      <>
        <img
          src={`https://staging.app.defiforyou.uk/_nuxt/img/${e.value}`}
          alt=""
          style={{ height: '20px', width: '20px', margin: '0px 8px 0 0' }}
        />
        <span>{e.label}</span>
      </>
    ),
  }));
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 'bold' : 'normal',
      color: 'white',
      backgroundColor: '#161614',
      fontSize: state.selectProps.myFontSize,
      '&:hover': {
        backgroundColor: '#050504',
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      padding: '0px 7px',
      color: '#fff !important',
      borderRadius: '16.5px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#161614',
      borderRadius: '20px',
    }),
    indicatorContainer: provider => ({
      ...provider,
      padding: '0px',
    }),
    indicatorsContainer: provider => ({
      ...provider,
      padding: '0px',
    }),
    placeholder: Provider => ({
      ...Provider,
      paddingLeft: '10px',
    }),
    valueContainer: provider => ({
      ...provider,
      padding: '6px',
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: props.heightOption,
      borderRadius: '20px',
    }),
    multiValueRemove: () => ({
      color: '#fff',
      backgroundColor: 'transparent',
      borderRadius: '10px',
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: '#fff',
    }),
    container: provided => ({
      ...provided,
      width: '100%',
      height: '100%',
      fontSize: '16px',
    }),
    input: provided => ({
      ...provided,
      fontSize: 16,
      marginleft: '8px',
      color: '#fff',
    }),
    control: provided => ({
      ...provided,
      height: '100%',
      width: '100%',
      outline: 'none',
      borderRadius: '30px',
      boxShadow: '#dba83d 0px 0px 0px 1px;',
      borderColor: 'rgba(255,255,255,0.24)',
      borderSize: '3px',
      background: 'transparent',
      '&:hover': {
        borderColor: 'rgba(255,255,255,0.24)',
      },
    }),
  };
  return (
    <SelectA
      className="react-select-container"
      isMulti
      options={options1}
      styles={styles}
      components={animatedComponents}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      onChange={e => props.onChange(e)}
    ></SelectA>
  );
}
