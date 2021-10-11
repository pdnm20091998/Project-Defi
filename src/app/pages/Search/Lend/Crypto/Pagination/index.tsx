/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Pagination
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate?: any;
}

export function Pagination(props: Props) {
  const pageNumbers: any[] = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container className="d-flex justify-content-center ">
      <Col sm="4" className="d-flex justify-content-center ">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Button
                onClick={() => props.paginate(number)}
                className={`page-link`}
              >
                {number}
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Container>
  );
}
