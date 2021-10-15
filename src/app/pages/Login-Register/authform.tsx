import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import Frame from './assets/img/Frame.png';
import Title from './Title/Title';
import Login from './Login/Login';
import Signup from './Signup/Sigup';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Navbar from 'app/components/NavBar/index';
import { useTranslation } from 'react-i18next';
import Footer from 'app/components/Footer/index';

const Img = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 992px) {
    margin-left: 52px;
  }
`;
const Content = styled.div`
  @media (max-width: 576px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  margin-bottom: 113px;
`;
const Tab = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 24px;
  display: inline-block;
  .signup {
    color: #fff;
    border-bottom: none;
    padding-bottom: 2px;
    text-decoration: none;
    margin-right: 48px;
  }
  .login {
    color: #fff;
    border-bottom: none;
    padding-bottom: 2px;
    text-decoration: none;
  }
  .active {
    color: #dba83d;
    border-bottom: 3px solid #dba83d;
    font-weight: 600;
  }
`;
export default function AuthForm() {
  const { t } = useTranslation();
  let { path, url } = useRouteMatch();
  let location = useLocation();
  return (
    <>
      <Navbar />
      <Content>
        <Container className="px-0">
          <Title />
          <Row>
            <Col
              className="form"
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
            >
              <Tab>
                <span>
                  <Link
                    className={
                      location.pathname === '/login/tab=1'
                        ? 'signup active'
                        : 'signup'
                    }
                    to={`${url}/tab=1`}
                  >
                    {t('login.signup_tab')}
                  </Link>
                </span>
                <span>
                  <Link
                    className={
                      location.pathname === '/login/tab=2' ||
                      location.pathname === '/login'
                        ? 'login active'
                        : 'login'
                    }
                    to={`${url}/tab=2`}
                  >
                    {t('login.login_tab')}
                  </Link>
                </span>
              </Tab>
              <Switch>
                <Route exact path={path}>
                  <Login />
                </Route>
                <Route path={`${path}/tab=2`}>
                  <Login />
                </Route>
                <Route path={`${path}/tab=1`}>
                  <Signup />
                </Route>
              </Switch>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
              <Img src={Frame} alt="Frame" />
            </Col>
          </Row>
        </Container>
      </Content>
      <Footer />
    </>
  );
}
