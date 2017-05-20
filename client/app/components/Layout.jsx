import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ chartData, collectData, findRetailers, storyPoint, history}) => {
  return (
    <div>
      <div className="container">
        <Header/>
        <Body
          chartData={chartData}
          findRetailers={findRetailers}
          collectData={collectData}
          storyPoint={storyPoint}
          history={history}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
