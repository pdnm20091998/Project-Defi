import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import CheckBoxField from '../Checkbox';

interface Iprops {
  title: string;
  listCheckBox: any;
  type?: 'sortList';
  change?: any;
}
function FilterComponent(props: Iprops) {
  const { title, listCheckBox, type } = props;

  const [openList, setOpenList] = useState(true);

  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <Wrapper sortList={type}>
      <div className="filters">
        <div className="headerFilter" onClick={handleClick}>
          <span>{title}</span>
          <div className="icons">
            {openList ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        {openList ? (
          <div className={`listFilter ${type}`}>
            {listCheckBox.map((item, index) => (
              <CheckBoxField
                key={index}
                name={item.name}
                title={item.title}
                img={item.img}
                value={item.value}
                change={props.change}
              />
            ))}
          </div>
        ) : (
          <div className={`listFilter ${type} hiddenList`}>
            {listCheckBox.map((item, index) => (
              <CheckBoxField
                key={index}
                name={item.name}
                title={item.title}
                img={item.img}
                value={item.value}
                change={props.change}
              />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ sortList?: string }>`
  .filters {
    max-height: 210px;
    padding-bottom: 12px;
    &:last-child {
      border-bottom: none;
    }
    .headerFilter {
      display: flex;
      justify-content: space-between;
      margin: 16px 12px 0 16px;
      cursor: pointer;
      align-items: flex-end;
    }
    .listFilter {
      overflow-y: scroll;
      max-height: 160px;
      margin-right: 16px;
      margin-top: 8px;
      animation: open 0.3s ease-in-out;
      &.sortList {
        overflow: hidden;
        max-height: 80px;
      }
      svg {
        width: 22px;
        height: 22px;
      }
      &.hiddenList {
        height: 0;
        animation: hidden 0.3s ease-in-out;
      }
    }
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
  @keyframes hidden {
    from {
      height: 160px;
    }
    to {
      height: 0;
    }
  }
  @keyframes open {
    from {
      height: 0;
    }
    to {
      height: ${props => (props.sortList === 'sortList' ? '80px' : '160px')};
    }
  }
`;

export default FilterComponent;
