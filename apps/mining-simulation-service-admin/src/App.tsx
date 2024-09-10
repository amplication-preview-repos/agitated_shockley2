import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MiningDeviceList } from "./miningDevice/MiningDeviceList";
import { MiningDeviceCreate } from "./miningDevice/MiningDeviceCreate";
import { MiningDeviceEdit } from "./miningDevice/MiningDeviceEdit";
import { MiningDeviceShow } from "./miningDevice/MiningDeviceShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { RewardsList } from "./rewards/RewardsList";
import { RewardsCreate } from "./rewards/RewardsCreate";
import { RewardsEdit } from "./rewards/RewardsEdit";
import { RewardsShow } from "./rewards/RewardsShow";
import { UserStatsList } from "./userStats/UserStatsList";
import { UserStatsCreate } from "./userStats/UserStatsCreate";
import { UserStatsEdit } from "./userStats/UserStatsEdit";
import { UserStatsShow } from "./userStats/UserStatsShow";
import { MiningSessionList } from "./miningSession/MiningSessionList";
import { MiningSessionCreate } from "./miningSession/MiningSessionCreate";
import { MiningSessionEdit } from "./miningSession/MiningSessionEdit";
import { MiningSessionShow } from "./miningSession/MiningSessionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MiningSimulationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="MiningDevice"
          list={MiningDeviceList}
          edit={MiningDeviceEdit}
          create={MiningDeviceCreate}
          show={MiningDeviceShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Rewards"
          list={RewardsList}
          edit={RewardsEdit}
          create={RewardsCreate}
          show={RewardsShow}
        />
        <Resource
          name="UserStats"
          list={UserStatsList}
          edit={UserStatsEdit}
          create={UserStatsCreate}
          show={UserStatsShow}
        />
        <Resource
          name="MiningSession"
          list={MiningSessionList}
          edit={MiningSessionEdit}
          create={MiningSessionCreate}
          show={MiningSessionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
