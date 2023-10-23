import React, { useState } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import HourlyDriver from '../driverTypes/hourlyDriver';
import StationDriver from '../driverTypes/stationDriver';
import WeeklyDriver from '../driverTypes/weeklyDriver';
import MonthlyDriver from '../driverTypes/monthlyDriver';

const { TabPane } = Tabs;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`;

// background - image: linear - gradient(to right, #0099f7, #f11712);
const SectionLayout = styled.div`
  background: rgb(8,19,54);
  background: linear-gradient(90deg, rgba(8,19,54,1) 3%, rgba(51,77,90,0.927608543417367) 97%);
  display: flex;
  flex-direction: row; 
  padding: 2rem;
  min-width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const TabColumn = styled.div`
  width: 50%; 
  display:flex;
  justify-content:center;
  padding: 20px; 
  overflow-y: auto; 
`;

const ContentColumn = styled.div`
  background-color:#eff0fa;
  border-radius:20px;
  padding:1rem;
  flex: 1; 
  padding: 20px; 
`;

const ContentArea = styled.div`
background-color:#fff;
border-radius:20px;
padding:1rem;
`

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    background-color: #fff;
    color: #333; 
    border-radius:5px
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #333; 
    color: #fff !important; 
  }
`;

const sideBarTab = [
    {
        id: 1,
        title: 'Hourly Driver',
        children: <HourlyDriver />,
    },
    {
        id: 2,
        title: 'Out Station Driver',
        children: <StationDriver />,
    },
    {
        id: 3,
        title: 'Weekly Driver',
        children: <WeeklyDriver />,
    },
    {
        id: 4,
        title: 'Monthly Driver',
        children: <MonthlyDriver />,
    },
];

const LandingPage = () =>
{
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) =>
    {
        setActiveTab(key);
    };

    return (
        <HomeWrapper>
            <SectionLayout>
                <TabColumn>
                    <StyledTabs
                        tabPosition="left"
                        activeKey={activeTab}
                        onChange={handleTabChange}
                    >
                        {sideBarTab.map((ele) => (
                            <TabPane tab={ele.title} key={ele.id}>
                                {/* Your tab content */}
                            </TabPane>
                        ))}
                    </StyledTabs>
                </TabColumn>
                <ContentColumn>
                    <ContentArea>
                        {sideBarTab.map((ele) =>
                            activeTab === ele.id.toString() ? (
                                <div key={ele.id}>{ele.children}</div>
                            ) : null
                        )}
                    </ContentArea>

                </ContentColumn>
            </SectionLayout>
        </HomeWrapper>
    );
};

export default LandingPage;
