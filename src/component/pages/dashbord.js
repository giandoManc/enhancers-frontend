import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BoxCity from '../boxCity';
import BoxLocation from '../boxLocation';
import BoxSearch from '../boxSearch';
import ListingCity from '../listingCity';
import BoxToday from '../boxToday';
import BoxWeek from '../boxWeek';
import BoxOtherDay from '../boxOtherDay';
import MobileView from './mobileView';

import moment from 'moment';
import {InitCitySelectAsync,InitCitys} from '../../actions'
import { useSelector,useDispatch } from 'react-redux';

import { useMediaQuery } from "react-responsive";

function Dashbord() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });

  let citySelect = useSelector(state=>state.citySelect);
  const clickSearchMobile = useSelector(state=>state.clickSearchMobile);
  const cityStore = useSelector(state=>state.city);
  const citys = useSelector(state=>state.citys);
  const dispact = useDispatch();
  
  if(Object.keys(cityStore).length === 0){
    dispact(InitCitySelectAsync());
    dispact(InitCitys());
  }
  cityStore.list = ((cityStore?.list)? cityStore?.list : [] );
  
  return (
      <div>
        {isDesktop &&
            <div className="Main" >
              <Container>
              <Row className="justify-content-md-center">
                <Col className="p-4 col-12" xl="8" xxl="9">
                    <Col xs lg="12">
                        <BoxCity city={cityStore}/>
                        <Row >
                            <Col className="p-4 col-12" xl="6" xxl="4">
                                <BoxToday city={cityStore}/>
                            </Col>
                            <Col className="pl-4 pr-4 pb-4 col-12" xl="6" xxl="8">
                                <BoxOtherDay city={cityStore} />
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col className="p-4 col-12" xl="4"  xxl="3">
                    <ListingCity citys={citys}/> 
                  <div className=''>
                    <BoxSearch/>
                    <BoxLocation/>
                  </div> 
                </Col>
              </Row>
          </Container>
          </div>
        }
        {(!isDesktop && !citySelect) &&
          <div>
            <ListingCity isDesktop={isDesktop} citys={citys}/>
            <div className="p-4 ">
              {(clickSearchMobile) &&
                <BoxSearch/>
              }
            </div>
          </div>
        } 
        {(!isDesktop && citySelect) && 
        <MobileView city={cityStore} isDesktop={isDesktop} citySelect={citySelect} week={listDay(cityStore.list)} />
        }
      </div>
      
  );
}

const listDay = (listInput) => {
  let list = listInput;
  let listOutput = [];
  let i =0;
  for (let index = 0; index-1 < list.length; index++) {
      const element = list[index];
      if((moment(list[index+1]?.dt_txt).format('YYYY-MM-DD') != moment(element?.dt_txt).format('YYYY-MM-DD') && moment().format('YYYY-MM-DD') != moment(element?.dt_txt).format('YYYY-MM-DD') )) {
          listOutput.push(element);
          i++;
      }
      
  }
  return listOutput;
}

export default Dashbord;
