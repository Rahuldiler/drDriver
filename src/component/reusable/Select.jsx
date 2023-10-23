import React from 'react'
import styled from 'styled-components'

const InputSection = styled.div`
  margin:1rem 0rem 0rem;
  text-align:left;
`
const SelectWrapper = styled.select`
  border : 1px solid #2292ca;
  font-size:14px;
  font-weight:500;
  

  &:focus{
    box-shadow:none;
    outline:none;
  }

`
const Select = ({ inputValue, onChange, labelValue, placeHolderValue, inputType, hasError }) =>
{
    const handleInput = (e) =>
    {
        const name = e.target.value;
        if (onChange)
        {
            onChange(name);
        }
    };
    return (
        <InputSection>
            <label htmlFor={labelValue} style={{ fontSize: "14px", fontWeight: "500" }}>{labelValue}</label>
            <SelectWrapper
                aria-label={labelValue}
                className={`form-control ${hasError ? 'error' : ''}`}
                autoComplete="off"
                type={inputType}
                onChange={(e) => handleInput(e)}
                placeholder={placeHolderValue}
                value={inputValue}
            >
                <option value="">
                    Select driver type
                </option>
                <option value="hourly_driver">
                    Hourly Driver
                </option>
                <option value="weekend_driver">
                    Weekend Driver
                </option>
                <option value="outStation_driver">
                    OutStation Driver
                </option>
                <option value="permanent_driver">
                    Permanent Driver
                </option>
            </SelectWrapper>
            {hasError && <span style={{ color: 'red', fontSize: '12px' }}>Field is required.</span>}
        </InputSection>

    )
}

export default Select